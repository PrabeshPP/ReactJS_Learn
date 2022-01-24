import Card from './Card';
import './ExpenseDate.css';
import React from 'react';


function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear();
return(
 <Card className="ExpenseItem-date">
<div className='ExpenseItem-date__month'>{month}</div>
<div className='ExpenseItem-date__year'>{year}</div>
<div className='ExpenseItem-date__day'>{day}</div>

</Card>
);

}

export default ExpenseDate;