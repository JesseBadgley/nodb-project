import  React from "react";
import Axios from "axios";
import image from "../images.png";
  

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "brew-u",
            info: "Find a beer, add to your list, and enjoy next time at your favorite pub!"
        }
        

    }

    render() {
        return(
            <header class= "header">
            <h1 class = "brew-u">{this.state.title} <img className="icon" src={image}></img> </h1>
            <p class= "under-header-info">{this.state.info}</p>
            </header>
            
        )
    }

}

export default NavBar;

