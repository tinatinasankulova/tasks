import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectYearHandler = (event) => {
    props.onChangedYear(event.target.value);
  };
//  Обработчик функция значенияны алып пропстан келген функция аркылуу поднятие болду
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectYearHandler} value={props.selected}>
          {/* value аркылуу двухсторонная связка болду */}
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
