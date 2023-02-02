import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [Input , setInput] = useState();
    const [Amount, setAmount] = useState();
    const [Date, SetDate] = useState();

    const InputFiledHandler = (event) =>{
        setInput(event.target.value);
    }
    const AmountFileHandler= (event) =>{
        setAmount(event.target.value);
    }
    const DateFileHandler= (event) =>{
        SetDate(event.target.value);
        
    }
    const SubmitFormHandler = (event) =>{
        event.preventDefault();

        const Datas ={
              text : Input , 
              number : Amount,
              date : Date
        };
        console.log(Datas);
    }

  return (
    <div>
        <form className='ExpenseForm' onSubmit={SubmitFormHandler}>
           <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" className='Input' onChange={InputFiledHandler} />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" className='Input' onChange={AmountFileHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" className='Input' min='01-10-2019' max='01-02-2023' onChange={DateFileHandler} />
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