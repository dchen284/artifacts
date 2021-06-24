import React from "react";


const UserProductDelete = ({ remove, productName }) => {
  return (
    <div>
      <div>Are you sure you want to delete<strong>{productName}</strong>? All contents related to this product will be removed from the store.</div>
      <button onClick={remove}>Confirm</button>
    </div>
  )
}

export default UserProductDelete;
