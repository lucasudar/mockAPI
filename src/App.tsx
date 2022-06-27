import React from 'react';
import UserList from "./components/userList";
import TodoList from "./components/todoList";
import PhotoList from "./components/photoList";

const App = () => {
  return (
    <div>
      <PhotoList />
      <hr/>
      <TodoList />
      <hr/>
      <UserList />
    </div>
  );
};

export default App;