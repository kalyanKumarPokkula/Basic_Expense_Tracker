import React from "react";
import { useState, useEffect } from "react";
import "../NewExpense/ExpenseForm.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ExpenseUpdateForm = props => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    async function expense() {
      try {
        let response = await axios.get(
          `http://127.0.0.1:3001/api/v1/expense/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response.data.data);
        setTitle(response.data.data.title);
        setAmount(response.data.data.price);
        setDate(response.data.data.date);
      } catch (error) {
        console.log(error);
      }
    }
    expense();
  }, []);
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

    const expenseData = {};

    if (title) {
      expenseData.title = title;
    }

    if (amount) {
      expenseData.price = amount;
    }

    if (date) {
      expenseData.date = new Date(date);
    }

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
