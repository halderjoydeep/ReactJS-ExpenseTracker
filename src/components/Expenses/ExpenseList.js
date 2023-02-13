import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  return props.items.length > 0 ? (
    props.items.map((item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ))
  ) : (
    <p className="expenses-list__fallback">No expense found</p>
  );
}

export default ExpenseList;
