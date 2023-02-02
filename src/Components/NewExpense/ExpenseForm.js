import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const InputFiledHandler = (event) =>{
        console.log(event.target.value);
    }
  return (
    <div>
        <form className='ExpenseForm'>
           <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" className='Input' onChange={InputFiledHandler} />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" className='Input'/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" className='Input' min='01-10-2019' max='01-10-2022' />
            </div>
            </div> 
            <div className='Form-submit__button'>
            <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm