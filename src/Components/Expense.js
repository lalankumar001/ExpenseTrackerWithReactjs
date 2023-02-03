import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import ExpenseFilter from './ExpenseFilter'

const Expense = (props) => {
  const[filterdYear, setFilteredYear] = useState('2020');
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  return (
    <div className="expenses">
      <ExpenseFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
    {props.items.map((expense)=>(
      <ExpenseItem 
      title={expense.title}
      amount ={expense.amount}
      date ={expense.date} 
      />
    ))}
    
  </div>
  )
}

export default Expense