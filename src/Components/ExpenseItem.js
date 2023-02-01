import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
  
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
         <h5>{props.Location}</h5>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}
 

export default ExpenseItem