import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ListItem from "./ListItem";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <h1>React Todo List App</h1>
      <Header todoList={todoList} setTodoList={setTodoList} />
      {todoList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default App;
