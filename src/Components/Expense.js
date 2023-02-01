import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'

const Expense = (props) => {
  return (
    <div className="expenses">
    <ExpenseItem
      title={props.items[0].title}
      Location={props.items[0].Location}
      amount={props.items[0].amount}
      date={props.items[0].date}
    />
    <ExpenseItem
      title={props.items[1].title}
      Location={props.items[1].Location}
      amount={props.items[1].amount}
      date={props.items[1].date}
    />
    <ExpenseItem
      title={props.items[2].title}
      Location={props.items[2].Location}
      amount={props.items[2].amount}
      date={props.items[2].date}
    />
    <ExpenseItem
      title={props.items[3].title}
      Location={props.items[3].Location}
      amount={props.items[3].amount}
      date={props.items[3].date}
    />
  </div>
  )
}

export default Expense