import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(params) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={params.date} />
      <div className="expense-item__description">
        <h2>{params.title}</h2>
        <div className="expense-item__price">${params.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
