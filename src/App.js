import { useState } from "react";
import ExpenseList from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense) {
    setExpenses((prevExpense) => [...prevExpense, newExpense]);
  }

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
