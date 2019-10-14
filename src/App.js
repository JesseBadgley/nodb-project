import React from 'react';
import logo from './logo.svg';
import styles from  './styles.css';
import NavBar from './Component/NavBar';
import FavList from './Component/FavList.js';
import FetchBeer from './Component/FetchBeer.js';
import Footer from './Component/footer.js';
import SideTop from './Component/sideTop.js';


class App extends React.Component{
  constructor () {
    super();
   
    }

  render() {
    return(
      <div class = "main-container"> 
             <header class = "nav-container"> <NavBar /> </header>
               
            <body class = "body-container">
             
              <FetchBeer />
              <div class= "box-container">
              <aside class= "right-side-container">
              <SideTop/>
              <FavList/>
              </aside></div>

            </body> 

             <footer><Footer /></footer>
      </div>
    );
  }
}

export default App;
