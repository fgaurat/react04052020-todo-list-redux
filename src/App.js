import React from 'react';
import TodoListContainer from './components/TodoListContainer';
import TodoFormContainer from './components/TodoFormContainer';

function App() {
  return (
    <div>
      <TodoFormContainer/>
      <TodoListContainer />
    </div>
  );
}

export default App;
