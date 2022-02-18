import "./Header.css";
import { useState, useRef } from "react";
import ListItem from "./ListItem";

const Header = ({ todoListSetter }) => {
  const [todoDesc, setTodoDesc] = useState();
  const todoInputRef = useRef();

  function handleAddClick() {
    if (todoDesc === "") {
      return;
    }

    //Add new todo to the array
    todoListSetter(
      (prevList) =>
        (prevList = [...prevList, {id: prevList.length+1, desc: todoDesc, complete: false }])
    );

    //Map array values to ListItems component
    todoListSetter((prevList) =>
      prevList.map((item) => <ListItem key={item.id} item={item} todoList={prevList} setTodoList = {todoListSetter}  />)
    );

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
    </header>
  );
};

export default Header;
