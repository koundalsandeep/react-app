import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const getDateFilterData = (date) => {
    setSelectedYear(date);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} getDate={getDateFilterData} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
