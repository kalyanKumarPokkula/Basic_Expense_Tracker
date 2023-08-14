import React from "react";
import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Navbar from "./components/Nav/Navbar";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e6",
    title: "New Bike",
    amount: 3000,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e7",
    title: "New Laptop",
    amount: 1000,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expensesData => {
    console.log("in App");
    console.log(expensesData);
    setExpenses([expensesData, ...expenses]);
  };

  return (
    <div>
      <Navbar />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
