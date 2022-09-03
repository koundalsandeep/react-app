import React from "react";
import "./AddExpense.css";
const AddExpenseButton = (props) => {
  const toggleForm = () => {
    props.openForm("");
  };
  return (
    <div className="new-expense__actions">
      <button type="button" onClick={toggleForm}>
        Add Expense Button
      </button>
    </div>
  );
};

export default AddExpenseButton;
