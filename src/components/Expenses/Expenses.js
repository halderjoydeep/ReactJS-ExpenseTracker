import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import Chart from "../Chart/Chart";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  function changeYearHandler(selectedYear) {
    setYear(selectedYear);
  }

  const filteredItems = props.items.filter(({ date }) => {
    return date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onChangeYear={changeYearHandler} />
      {filteredItems.length !== 0 && <Chart items={filteredItems} />}
      <ExpenseList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
