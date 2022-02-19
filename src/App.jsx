import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ListItem from "./ListItem";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterValue, setFilterValue] = useState(0);

  return (
    <div className="container">
      <h1>React Todo List App</h1>
      <Header todoList={todoList} setTodoList={setTodoList} setFilterValue={setFilterValue} />
      {todoList
        .filter((item) => {
          
          if (filterValue == 1) {
            return item.complete === true;
          }

          if (filterValue == 2) {
            return item.complete === false;
          }
          return item;
        })
        .map((item) => (
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
