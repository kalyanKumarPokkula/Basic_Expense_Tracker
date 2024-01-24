import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import "../../loading.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../config";

function Expense(props) {
  const [expenseFilter, setExpenseFilter] = useState("2024");
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getExpenses() {
      try {
        let response = await axios.get(
          `${URL}/api/v1/expenses/${expenseFilter}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setExpenses([...response.data.data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getExpenses();
  }, [expenseFilter]);

  const expenseFilterHandler = entertedExpenseFilterYear => {
    setExpenseFilter(entertedExpenseFilterYear);
  };

  // var filteredExenses = expenses.filter(expense => {
  //   const date = new Date(expense.date).getFullYear();
  //   return date.toString() === expenseFilter;
  // });

  function onDeleteExpenseHandler(expenseId) {
    setTimeout(async function deleteExpense() {
      try {
        console.log(expenseId);
        let response = await axios.delete(
          `${URL}/api/v1/expense/${expenseId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    let newExpense = expenses.filter(expense => {
      return expense._id !== expenseId;
    });

    setExpenses([...newExpense]);
  }

  return (
    <div className="expense">
      <ExpenseFilter
        selected={expenseFilter}
        onExpenseFilterData={expenseFilterHandler}
      />

      <ExpenseChart expenses={expenses} />
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="loader"></div>
        </div>
      )}
      {!isLoading && (
        <div>
          {expenses.length === 0 && (
            <h2 style={{ marginTop: "20px" }}>No expenses are found.</h2>
          )}
          {expenses.length > 0 &&
            expenses.map(expense => (
              <ExpenseItem
                key={expense._id}
                id={expense._id}
                title={expense.title}
                price={expense.price}
                date={expense.date}
                onDeleteHandler={onDeleteExpenseHandler}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Expense;
