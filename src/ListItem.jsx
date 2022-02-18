import React from "react";
import "./ListItem.css";

function ListItem({ item }) {

  return (
    <div className="card" >
      <p>{item.desc}</p>
      <p>{item.complete ? "Complete" : "Uncomplete"}</p>
    </div>
  );
}

export default ListItem;
