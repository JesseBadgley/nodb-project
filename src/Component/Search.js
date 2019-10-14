import React, {Component} from "react";
 import Axios from "axios";


const API_URL = 'https://api.punkapi.com/v2/beers/food';

class Search extends Component {
     state = {
      query: '',
      results: []
  }

  getInfo = () => {
    Axios.get(`https://api.punkapi.com/v2/beers/food/${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

   searchFoodPair= e =>{
        this.setState({query: e.target.value}) 
    }

  render() {
    return (
      <form>
        <input placeholder="Search..."  onChange={this.handleInputChange}/>
        
      </form>
    )
  }
}

export default Search;