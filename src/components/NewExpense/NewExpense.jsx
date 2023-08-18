import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const ExpenseDateHandler = enteredExpenseData => {
    let expenseDate = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new_expense">
      <ExpenseForm onSaveExpenseData={ExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
