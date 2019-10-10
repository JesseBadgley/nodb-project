import React from 'react';
import logo from './logo.svg';
import styles from  './styles.css';


class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      item: '',
      cost: ''
    }
  }

  changeItem(input){
    
  }


  render() {
    return(
      <div>
        <header class= "header">Welcom to ushop</header>
       <input 
       onChange= { (e)=>this.changeItem(e.target.value)}
       value={this.state.item} type="text"/>
      </div>
    );
  }
}

export default App;
