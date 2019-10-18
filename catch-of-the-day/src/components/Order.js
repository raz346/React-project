import React from 'react';
import {formatPrice} from "../helpers";
import {TransitionGroup, CSSTransition} from "react-transition-group";

class Order extends React.Component {

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) {
      return null;
    }
    if (!isAvailable) {
      return <li key={key}>sorry {fish ? fish.name : "fish"} is not longer available</li>
    }
    return <li key={key}> 
      {count} lbs {fish.name}
      {formatPrice(count * fish.price)}
      <button onClick={() => this.props.deleteFromOrder(key)}>
        &times;
      </button>
    </li>
  }

  // newFunction {

  

  render() { 
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((accumlator, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if(isAvailable) {
        return accumlator + count * fish.price;
      }
      return accumlator;
    }, 0);
    return(
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderId.map(this.renderOrder)}</ul>
        <strong className="total">{formatPrice(total)}</strong>
      </div>
    )
  }
}
 
export  default Order;







