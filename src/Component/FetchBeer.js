import React, {Component} from "react";
 import Axios from "axios";
 import Search from './Search.js';


// const urlForBeer = beer =>
// 'https://api.punkapi.com/v2/beers/random';

// class fetchRecipe extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {}
//     }


// componentDidMount(){
//     fetch(urlForBeer(this.props.beer))
//     .then(d => d.json())
//     .then(d => {
//         this.setState([
//             {punkApiData}
//         ])
//     })
// }

// render () {
//     if (!this.state.punkApiData) return <p>Loading...</p>
//     return (
//         <div>
//         <h2>{this.state.punkApiData}</h2>
//         </div>
//     )
// }
// }

// export default fetchRecipe;


export default class FetchBeer extends React.Component {
    constructor() {
        super();
        this.state = {
             beers: [],
            errorMessage: "Oops, something went wrong."
        }
    }

    componentDidMount = () => {
        Axios.get("https://api.punkapi.com/v2/beers/random")
        .then((response) => {
       this.setState({beers: response.data});
       console.log(response)
  })
    .catch((error) => {
      console.log(error.message);
      this.setState({errorMessage: error.message});
    })
    }

   

    
    

//   componentDidMount() {
//     axios.get("https://api.edamam.com/api/food-database/parser").then((response) => {
//        this.setState({title: response.data});
//        console.log(response)
//   })
//     .catch((error) => {
//       console.log(error.message);
//       this.setState({errorMessage: error.message});
//     })
//   }

    render() {
    
    
    let mappedBeers= this.state.beers.map((element) => {
    
        return(

        <section class= "fetch-beer-container">
        <h1>Name: &nbsp; {element.name}</h1>
        <h4>Tag: &nbsp; {element.tagline}</h4>
        <h3 class = "food-pairing">Food Pairing: &nbsp; {element.food_pairing}</h3>
        <img class = "img-container" src={element.image_url} alt="my_img" />
       </section> 

       )
    })
        return (
            <section class = "beer-finder">
                 <div class= "search-txt"> Find beer by food pairing: </div>
                <Search /> 
              <button onClick={this.componentDidMount}>Random Beer</button>
              <p>{mappedBeers}</p>
             </section>
        )
        
    }
    
}





