import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    console.log("hi");
  }
  render() { 
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='A Cool Market'/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}
 
export default App;