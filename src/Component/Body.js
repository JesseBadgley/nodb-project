import  React from "react";
import axios from "axios";
  

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            itemInput: '',
            list: [],
            costInput: '',
            id: ''
           
        }
    
this.handleCostChange = this.handleCostChange.bind( this);
this.addItem = this.addItem.bind ( this );
this.handleClick = this.handleClick.bind(this);
this.deleteItem = this.deleteItem.bind(this);

}
   

    handleCostChange = e =>{
        this.setState({costInput:e.target.value})
    }

    addItem= e =>{
        this.setState({itemInput:e.target.value}) 
    }       

    handleClick = e =>{
        const{costInput,itemInput} = this.state;
        e.preventDefault();
        axios.post("/api/shopu",{
            list: itemInput,
            cost: costInput
            
        }).then(response=>{
            console.log(response.data);
            this.setState({list: response.data})
        })
    }

    componentDidMount(){
        axios.get("/api/shopu").then(response=>{
            console.log(response.data);
            this.setState({list : response.data})
        })
    };

    deleteItem ( id ) {
        axios.delete( "api/shopu" ). then ( response =>{
            this.setState({list: response.data});
        })
    }
    
    
    

    render() {
        
        return(
          
             <body>
            
               
                <input placeholder="item"  onChange={this.addItem}/>
                <input placeholder="price" onChange={this.handleCostChange}/>

                <button onClick= { this.handleClick}>Add</button>
                
               
                <ol> {this.state.list.map( (val) => <li>{val.list} {val.cost}</li>)} </ol>
                
                <button onClick= {this.deleteItem}>Remove</button>
            
            </body>
            
        )
    }

}

export default Body;
    