import React from "react";


const UserProductDelete = ({ remove, productName }) => {
  return (
    <div id='userProduct___delete'>
      <div>Are you sure you want to remove <strong>{productName} </strong>from the store? All contents related to this product will be removed from the store and this product will no longer be listed for sale.</div>
      <button onClick={remove}>Confirm</button>
    </div>
  )
}

export default UserProductDelete;
