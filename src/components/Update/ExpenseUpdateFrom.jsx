import React from "react";
import { useState } from "react";
import "../NewExpense/ExpenseForm.css";

const ExpenseUpdateForm = props => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleHandler = event => {
    setTitle(event.target.value);
  };

  const amountHandler = event => {
    setAmount(event.target.value);
  };
  const dataHandler = event => {
    setDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: title,
      price: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="title">
          <h2>Update_Expense</h2>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            // min="0.01"
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            // min="2019-01-01"
            // max="2022-12-31"
            value={date}
            onChange={dataHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Update Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseUpdateForm;
