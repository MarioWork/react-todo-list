import "./Header.css";
import { useState, useRef } from "react";
import ListItem from "./ListItem";

const Header = ({ todoListSetter }) => {
  const [todoDesc, setTodoText] = useState();
  const todoInputRef = useRef();

  function handleAddClick() {
    if (todoDesc === "") {
      return;
    }

    todoListSetter(
      (prevList) =>
        (prevList = [...prevList, {id: prevList.length+1, desc: todoDesc, complete: false }])
    );

    todoListSetter((prevList) =>
      prevList.map((item) => <ListItem key={item.id} item={item}  />)
    );

    setTodoText((prevDesc) => (prevDesc = ""));
    todoInputRef.current.value = "";
  }

  function handleTodoDescOnChange(e) {
    setTodoText((prevDesc) => (prevDesc = e.target.value));
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
