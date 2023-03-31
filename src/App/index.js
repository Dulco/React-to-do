
import React from 'react'
import { AppUI } from './AppUI.js';
import { TodoProvider } from '../TodoContext/index.js';

//const defaultTodos = [
  //{text: 'cortar cebolla', completed: false},
  //{text: 'curso react', completed: true},
  //{text: 'llorar uwu', completed: true}
//];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
