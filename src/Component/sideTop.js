import React, {Component} from "react";
import Axios from "axios";
import FetchBeer from './FetchBeer.js';
import Search from './Search.js';
  

export default class SideTop extends React.Component {


    render() {
        return(
            <div class = "recommendations">
            <h2> Our recommendations.. </h2>
            <div class= "pair-1">
                <h3> Name: Silly Goose</h3>
                <h4> Food Pairing: Fish with lemon-butter sauce, ceviche, goat cheese, salads, Mexican food and fried foods.</h4>
            </div>
            <div class= "pair-2">
                <h3>Name: The Salty Lady</h3>
                <h4>Food Pairing: Straight up or with mussels, oysters, ceviche, goat cheese, grilled fish or chicken, and dishes with egg- or cream-enriched sauces.</h4>
            </div>
              
            
            </div>
        )
    }

}

