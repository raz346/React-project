import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = key => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({
      order: order
    })
    
  }
  render() { 
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='A Cool Market'/>
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key =>
               <Fish key={key} fishDetails={this.state.fishes[key]}
               addToOrder={this.addToOrder} index={key} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}
 
export default App;