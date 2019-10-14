import  React from "react";
import axios from "axios";
  

class FavList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            itemInput: '',
            list: [],
            costInput: '',
            id: '',
            allCost: [],
            errorMessage: "Oops, something went wrong."
           
        }
    
this.handleCostChange = this.handleCostChange.bind( this);
this.addItem = this.addItem.bind ( this );
this.handleClick = this.handleClick.bind(this);
this.deleteItem = this.deleteItem.bind(this);
this.update = this.update.bind(this);
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
        axios.post("/api/brewu",{
            list: itemInput,
            cost: costInput
            
        }).then(response=>{
            console.log(response.data);
            this.setState({list: response.data})
        })
    }

    componentDidMount(){
        axios.get("/api/brewu").then(response=>{
            console.log(response.data);
            this.setState({list : response.data})
        })
         .catch((error) => {
      console.log(error.message);
      this.setState({errorMessage: error.message});
    })
    };

    deleteItem ( id ) {
        axios.delete( "api/brewu" ). then ( response =>{
            console.log(response.data)
            this.setState({list: response.data});
        })
    }

    update ( id ) {
        const {itemInput, costInput} = this.state;
        axios.put(`api/brewu/${id}`, {list: itemInput,
            cost: costInput}).then (response => {
            this.setState({costInput: response.data});
            console.log(response.data)
        });
    }
    
    
    

    render() {
        
        return(
          
             <aside class = "list-container">
                <h1>Favorite List</h1>
                <form class = "inputs">
                     <input placeholder="beer.."  onChange={this.addItem}/>
                     <input placeholder="more info.." onChange={this.handleCostChange}/>
                </form>

                <button class = "add-butt" onClick= { this.handleClick}>Add</button>
                
               
                <ol> {this.state.list.map( (val) => 
                    <li>{val.list} {val.cost}
                        <button onClick= {this.deleteItem}>remove</button> 
                        <button onClick= {this.update}>update</button>
                    </li>)} 
                </ol>
                
                
            </aside>
            
        )
    }

}

export default FavList;
    