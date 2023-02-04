import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import ExpenseFilter from './ExpenseFilter'

const Expense = (props) => {
  const[filterdYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filterdYear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
    {filteredExpense.map((expense)=>(
      <ExpenseItem 
      key ={expense.id}
      title={expense.title}
      amount ={expense.amount}
      date ={expense.date} 
      />
    ))}
    
  </div>
  )
}

export default Expense