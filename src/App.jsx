import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ListItem from "./ListItem";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header todoListSetter={setTodoList} />
      {todoList}
    </>
  );
};

export default App;
