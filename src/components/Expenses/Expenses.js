import {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const[filterYear,setFilterYear] = useState('2021');
  // const [expensesItems, setExpensesItems] = useState(props.items);

  const filterChangeHandler = (year) =>{
    setFilterYear(year);
    // setExpensesItems(() => {
    //   return props.items.filter((expense) => {
    //     return expense.date.getFullYear() === +year;
    //   });
    // });
  }

  const filteredExpenses = props.items.filter(fyear =>{
    return fyear.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>

        {/* {expensesItems &&
          expensesItems.length > 0 &&
          expensesItems.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}
          
      </Card>
    </div>
  );
}

export default Expenses;