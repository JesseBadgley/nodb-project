import  React from "react";
import Axios from "axios";
  

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "welcome to ushop.",
            info: "use the list bewlow and never forget another item while your're out shopping."
        }
        

    }

    render() {
        return(
            <nav>
                <header class= "header">{this.state.title}</header>
                <h4 class= "under-header-info">{this.state.info}</h4>
            </nav>
        )
    }

}

export default NavBar;

