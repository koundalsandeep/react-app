import React, { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";
const AddExpense = (props) => {
  const [showForm, setFormVisibility] = useState(false);
  const showFormHandler = () => {
    setFormVisibility(true);
  };
  const hideFormHandler = () => {
    setFormVisibility(false);
  };

  const savedExpenseData = (formExpenseData) => {
    const expenseData = {
      ...formExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={showFormHandler}>
          Add Expense Button
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpensedata={savedExpenseData}
          hideForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default AddExpense;
