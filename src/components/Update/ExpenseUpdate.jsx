import React from "react";
import ExpenseUpdateForm from "./ExpenseUpdateFrom";
import "../NewExpense/NewExpense.css";

const ExpenseUpdate = () => {
  const UpdateExpenseHandler = () => {};
  return (
    <div className="new_expense">
      <ExpenseUpdateForm onSaveExpenseData={UpdateExpenseHandler} />
    </div>
  );
};

export default ExpenseUpdate;
