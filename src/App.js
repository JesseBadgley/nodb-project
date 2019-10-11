import React from 'react';
import logo from './logo.svg';
import styles from  './styles.css';
import NavBar from './Component/NavBar';
import Body from './Component/Body.js';


class App extends React.Component{
  constructor () {
    super();
   
    }

  render() {
    return(
      <div> 
             <NavBar />
             <Body />
      </div>
    );
  }
}

export default App;
