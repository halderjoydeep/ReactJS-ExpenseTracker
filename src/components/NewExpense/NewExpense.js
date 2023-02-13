import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className="new-expense">
      {!isExpanded ? (
        <button onClick={handleClick}>Add New Expense</button>
      ) : (
        <ExpenseForm addExpense={props.addExpense} onCancel={handleClick} />
      )}
    </div>
  );
}

export default NewExpense;
