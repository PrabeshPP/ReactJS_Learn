import './App.css';
import React  from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
   
    <div className='main'>
   <div>Add new Expense</div>
   <ExpenseItem/>
    </div>
    
  );
}

export default App;
