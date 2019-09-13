import React, { Component } from 'react'

class AddFishForm extends Component {
  render() {
    return (
     <form class="fish-edit" action="">
       <input name="name" type="text" placeholder="Name" />
       <input name="price" type="text" placeholder="Price" />
       <select name="status">
        <option value="Avilable">Fresh</option>
        <option value="Avilable">Sold</option>
       </select>
       <textarea name="desc" placeholder="Desc" />
       <input name="image" type="text" placeholder="Image" />
       <button type="submit">+ Add Fish</button>
     </form>
    )
  }
}

export default AddFishForm;
