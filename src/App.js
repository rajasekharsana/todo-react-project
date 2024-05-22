import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription:'Feed Puppy', rowAssigned:'User One'}, 
    {rowNumber:2, rowDescription:'Water Plnts', rowAssigned:'User two'}, 
    {rowNumber:3, rowDescription:'Make Dinner', rowAssigned:'User One'},
    {rowNumber:4, rowDescription:'Charge Phone', rowAssigned:'User two'}
  ]);

  const addTodo = (description, assigned) => {
    console.log('Add todo button has been clicked !');
    if(todos.length > 0){
      const newTodo = {
        rowNumber:todos.length +1, 
        rowDescription:description, 
        rowAssigned:assigned
      };
      setTodos(todos => [...todos, newTodo]);
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>

        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add New Todo
          </button>
          <NewTodoForm addTodo = {addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
