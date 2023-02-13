import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setExpense((prevExpense) => {
      return {
        ...prevExpense,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    expense.date = new Date(expense.date);
    props.addExpense({ ...expense, id: Math.random().toString() });
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={handleChange}
            name="title"
            value={expense.title}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={handleChange}
            name="amount"
            value={expense.amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={handleChange}
            name="date"
            value={expense.date}
            type="date"
            min="2021-01-01"
            max="2025-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
