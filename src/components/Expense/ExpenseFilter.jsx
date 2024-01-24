import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const expenseFilterHandler = event => {
    props.onExpenseFilterData(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={expenseFilterHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
