import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler =(enterExpenseData) =>{
       const expenseData={
        ...enterExpenseData,
        id: Math.random().toString()
       };
        props.onAddExpense(expenseData);
      }
  return (
    <div>
     <ExpenseForm onSaveExpenseFormData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense