import "./Header.css";
import { useState, useRef } from "react";

const Header = ({ todoList, setTodoList }) => {
  const [todoDesc, setTodoDesc] = useState();
  const todoInputRef = useRef();

  function handleAddClick() {
    if (todoDesc === "" || todoDesc === undefined) {
      return;
    }

    let tempTodoList = todoList;

    //Create new todo object
    let newTodo = {
      id: tempTodoList.length + 1,
      desc: todoDesc,
      complete: false,
    };

    //Add the new todo as a ListItem component
    tempTodoList = [
      ...tempTodoList,
      newTodo
    ];


    //Update the todoList state
    setTodoList((prevList) => (prevList = tempTodoList));

    //Clean the state var and the value in the input
    setTodoDesc((prevDesc) => (prevDesc = ""));
    todoInputRef.current.value = "";
  }

  //Update the state with the input value
  function handleTodoDescOnChange(e) {
    setTodoDesc((prevDesc) => (prevDesc = e.target.value));
  }

  return (
    <header className="header">
      <input
        ref={todoInputRef}
        onChange={handleTodoDescOnChange}
        type="text"
        placeholder="Enter your to-do..."
      />
      <button className="button" onClick={handleAddClick}>
        Add
      </button>
      <select className="custom-select">
        <option value="0">All</option>
        <option value="1">Completed</option>
        <option value="2">Uncompleted</option>
      </select>
    </header>
  );
};

export default Header;
