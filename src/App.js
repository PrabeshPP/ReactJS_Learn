import './App.css';
import React ,{useState} from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpenseFilter';


function App() {
 let expenses=[
    {
      title:"Toilet Paper",
      amount:94.12,
      date:new Date(2020,7,14)
    },
    {
      title:"Ryzen Laptop",
      amount:1000,
      date:new Date(2020,7,15)
    },
    {
      title:"PS5",
      amount:500,
      date:new Date(2020,7,16)
    }
  ]

  const addExpenseHandler=(ExpenseData)=>{
    console.log("In app.js");
    console.log(ExpenseData);

  }

  const [filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);


  }

  return (
   
    <div className='main'>
<NewExpense onNewExpense={addExpenseHandler}/>

   <div className='App-main1'>
   <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
   <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   </div>
    </div>
    
  );
}

export default App;
