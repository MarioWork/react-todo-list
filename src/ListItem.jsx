import React from "react";
import "./ListItem.css";

function ListItem({ item, todoList, setTodoList }) {

  
  function handleCardClick() {
    let tempList = todoList;
  
    //Find the index of the item in question
    let index = tempList.findIndex(_item => _item.id === item.id);
  
    //Invert the completion of the task
    tempList[index].complete = !tempList[index].complete;
    
    //Update the list
    setTodoList((prevList) => (
      prevList = [...tempList]
    ));
  }

  //JSX Return
  return (
    <div
      className={item.complete ? "card text-decor-line" : "card"}
      onClick={handleCardClick}
    >
      <p>{item.desc}</p>
    </div>
  );
}

export default ListItem;
