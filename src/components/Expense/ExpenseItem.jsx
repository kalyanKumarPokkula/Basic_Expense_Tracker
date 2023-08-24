import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { MdDelete } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { useParams, useNavigate } from "react-router-dom";

function ExpenseItem({ title, date, price }) {
  const { ExpenseId } = useParams();
  const navigator = useNavigate();

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div>
          <div className="expense-item__price">$ {price}</div>
          <div className="expense-item__icons">
            <div
              className="expense-item__icon"
              onClick={() => {
                navigator(`/expense/${title}`);
              }}
            >
              <HiPencilAlt size={17} />
            </div>
            <div className="expense-item__icon">
              <MdDelete size={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
