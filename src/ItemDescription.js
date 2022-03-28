import React from "react";

function ItemDescription({name, description}) {
  return (
    <div className="itemDescription">
      <h2 className="itemDescription__name">{name}</h2>
      <p className="itemDescription__description">{description}</p>
    </div>
  )
}

export default ItemDescription