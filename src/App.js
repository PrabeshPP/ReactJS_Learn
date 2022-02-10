import './App.css';
import React ,{useState} from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpenseFilter';
let dummy_expenses=[
 
]




function App() {
 let [expenses,newExpenses]=useState(dummy_expenses);
 
  const addExpenseHandler=(ExpenseData)=>{
   newExpenses((previousState)=>{
    
     return [ExpenseData,...previousState];
     
   });
  }
  const [filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses=expenses.filter((item)=>{
    return item.date.getFullYear().toString()==filteredYear;
  })

  

  return (
   
    <div className='main'>
<NewExpense onNewExpense={addExpenseHandler}/>

   <div className='App-main1'>
  <ExpensesFilter 
  selected={filteredYear}
  onChangeFilter={filterChangeHandler}
  />
   {filteredExpenses.length==0? <h3>No Expenses</h3>:filteredExpenses.map((item)=>(
  
     <ExpenseItem 
     key={item.id}
     title={item.title}
     amount={item.amount}
     date={item.date}/>
   ))}
   </div>
    </div>
    
  );
}

export default App;
