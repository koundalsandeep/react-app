import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";

const static_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 212.23,
    date: new Date(2020, 8, 8),
  },
  {
    id: "e2",
    title: "Life Insurance",
    amount: 412.23,
    date: new Date(2022, 4, 6),
  },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 812.23,
    date: new Date(2021, 7, 5),
  },
  {
    id: "e4",
    title: "Machine Insurance",
    amount: 512.23,
    date: new Date(2022, 5, 8),
  },
  {
    id: "e5",
    title: "Pet Insurance",
    amount: 112.23,
    date: new Date(2020, 9, 8),
  },
];
function App() {
  const [expenses, setExpenses] = useState(static_expenses);
  const addExpenseItem = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <AddExpense onAddExpense={addExpenseItem} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
