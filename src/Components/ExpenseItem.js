import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
  const [title , setTitle] = useState(props.title);
  const [amount , setAmount] = useState(props.amount);
  
  const onClickHandelar = () => {
      setTitle('updated');
        
  }
  const onClickDelete =() =>{
       setTitle('')
  }
const AddAmount =() =>{
   setAmount('$100');
}
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
         <h5>{props.Location}</h5>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={onClickHandelar}>Change Title</button>
        <button onClick={AddAmount}>add</button>
        <button onClick={onClickDelete}>delete</button>
      </div>
    </div>
  );
}
 

export default ExpenseItem