import React, {Fragment} from "react";
import {getFunName} from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore =  (event) => {
    event.preventDefault();
    const StoreName = this.myInput.current.value;
    this.props.history.push(`/store/${StoreName}`);
  }
  render() {
    return (
      <Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>please enter a store</h2>
          <input
          type="text"
          ref={this.myInput}
          required placeholder= "Store Name" 
          defaultValue={getFunName()}/>
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;


