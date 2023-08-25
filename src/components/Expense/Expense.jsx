import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

function Expense(props) {
  const [expenseFilter, setExpenseFilter] = useState("2023");

  const expenseFilterHandler = entertedExpenseFilterYear => {
    setExpenseFilter(entertedExpenseFilterYear);
    console.log(entertedExpenseFilterYear);
  };

  var filteredExenses = props.expenses.filter(expense => {
    const date = new Date(expense.date).getFullYear();
    return date.toString() === expenseFilter;
  });

  return (
    <div className="expense">
      <ExpenseFilter
        selected={expenseFilter}
        onExpenseFilterData={expenseFilterHandler}
      />

      <ExpenseChart expenses={filteredExenses} />
      {filteredExenses.length === 0 && (
        <h2 style={{ marginTop: "20px" }}>No expenses are found.</h2>
      )}
      {filteredExenses.length > 0 &&
        filteredExenses.map(expense => (
          <ExpenseItem
            key={expense._id}
            id={expense._id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </div>
  );
}

export default Expense;
