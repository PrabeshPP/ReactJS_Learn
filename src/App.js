import './App.css';
import React  from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';


function App() {
  const expenses=[
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
  return (
   
    <div className='main'>
   <div><h1>Expenses</h1></div>
   <div className='App-main1'>
   <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
   <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
   </div>
    </div>
    
  );
}

export default App;
