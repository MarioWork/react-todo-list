import React from "react";
import "./ListItem.css";

function ListItem({ item, todoList, setTodoList }) {
  function handleCardClick() {
    let tempTodoList = todoList;

    //Find the item index
    let index = tempTodoList.findIndex((_item) => _item.id === item.id);

    //Change the complete property to the inverse
    tempTodoList[index].complete = !tempTodoList[index].complete;

    //Map the items of the list to a Listitem component
    let mappedList = tempTodoList.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    ));

    //Update the todoList state
    setTodoList((prevList) => (prevList = mappedList));
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <p>{item.desc}</p>
      <p>{item.complete ? "Complete" : "Uncomplete"}</p>
    </div>
  );
}

export default ListItem;
