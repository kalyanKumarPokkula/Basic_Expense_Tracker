import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewExpense = props => {
  const navigator = useNavigate();
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
        navigator("/expenses");
      } catch (error) {
        console.log(error);
      }
    }

    addExpense();
  };

  return (
    <div className="new_expense">
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
