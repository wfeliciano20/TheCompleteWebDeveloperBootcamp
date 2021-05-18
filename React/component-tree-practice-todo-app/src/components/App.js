import React, { useState}  from "react";
import ListItem from "./ListItem";
import InputArea from "./InputArea";


function App() {

  const [inputText,setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const value  = event.target.value;

    setInputText(value);
  }

  const addTodo = () => {
    setTodos( previousTodos => {
      return [...previousTodos,inputText];
    });
    setInputText("");
  }

  const deleteTodo = (id) => {
        setTodos( previousTodos =>{
          return previousTodos.filter((item, index) => index !== id)
        });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea cliked={addTodo} change={handleChange} input={inputText} />
      {/* <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div> */}
      <div>
        <ul>
          {/* {todos.map( todoItem => <li>{todoItem}</li> ) } */}
          {todos.map( (todoItem, index) => <ListItem 
          id={index}
          key={index} 
          value={todoItem} 
          onChecked={deleteTodo}  
          />) }
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
