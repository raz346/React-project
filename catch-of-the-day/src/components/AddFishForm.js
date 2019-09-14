import React, { Component } from 'react'

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  statusRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      desc: this.descRef.current.value,
      status: this.statusRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addFish(fish);
    event.currentTarget.reset();
  }

  render() {
    return (
     <form className="fish-edit" onSubmit={this.createFish}>
       <input name="name" type="text" placeholder="Name" ref={this.nameRef}/>
       <input name="price" type="text" placeholder="Price" ref={this.priceRef} />
       <select name="status"ref={this.statusRef}>
        <option value="avilable">Fresh</option>
        <option value="notAvilable">Sold</option>
       </select>
       <textarea name="desc" placeholder="Desc" ref={this.descRef}/>
       <input name="image" type="text" placeholder="Image" ref={this.imageRef}/>
       <button type="submit">+ Add Fish</button>
     </form>
    )
  }
}

export default AddFishForm;
