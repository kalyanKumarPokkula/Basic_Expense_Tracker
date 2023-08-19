import React from "react";

import Expense from "../Expense/Expense";
import NewExpense from "../NewExpense/NewExpense";
import axios from "axios";

import { useState, useEffect } from "react";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     price: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     price: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     price: 450,
//     date: new Date(2021, 5, 12),
//   },
//   {
//     id: "e5",
//     title: "New Desk (Wooden)",
//     price: 450,
//     date: new Date(2022, 5, 12),
//   },
//   {
//     id: "e6",
//     title: "New Bike",
//     price: 3000,
//     date: new Date(2021, 5, 12),
//   },
//   {
//     id: "e7",
//     title: "New Laptop",
//     price: 1000,
//     date: new Date(2021, 5, 12),
//   },
//   {
//     id: "e8",
//     title: "New Desk (Wooden)",
//     price: 450,
//     date: new Date(2023, 5, 12),
//   },
// ];

const ExpensesLayout = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      try {
        let response = await axios.get(
          "http://127.0.0.1:3001/api/v1/expenses",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response.data.data);
        setExpenses([...response.data.data]);
      } catch (error) {
        console.log(error);
      }
    }
    getExpenses();
  }, []);

  const addExpenseHandler = expensesData => {
    async function addExpense() {
      try {
        let response = await axios.post(
          "http://127.0.0.1:3001/api/v1/expense",
          {
            ...expensesData,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response.data.data);
        setExpenses(pre => [...pre, response.data.data]);
      } catch (error) {
        console.log(error);
      }
    }

    addExpense();
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default ExpensesLayout;
