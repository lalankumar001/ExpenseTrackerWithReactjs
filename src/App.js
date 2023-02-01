import Expenses from "./Components/Expense";
import './App.css'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Chair",
      Location : 'New Delhi',  
      amount: 94.12,
    date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      Location : 'Bihar',
      amount: 799.49,
       date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      Location : 'New Delhi',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      Location : 'Jaipur',   
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
