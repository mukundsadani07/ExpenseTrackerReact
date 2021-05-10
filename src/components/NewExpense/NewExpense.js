import {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';

const NewExpense = (props) =>{
  const[clickedExpense,setClickedExpense] = useState(false);

  const clickExpenseHandler = () =>{
    setClickedExpense(true);
  }
  const stopClickExpenseHandler = () =>{
    setClickedExpense(false);
  }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setClickedExpense(false);

    };
  if (!clickedExpense) {
    return (
      <div className="new-expense">
        <button onClick={clickExpenseHandler}>Add New Expense</button>
      </div>
    );
  }
  if (clickedExpense) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopClickExpenseHandler}
        />
      </div>
    );
  }

    // return(
    //     <div className="new-expense">
    //       {!clickedExpense && <button onClick={clickExpenseHandler}>Add New Expense</button>}
    //       {clickedExpense && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />}
    //     </div>
    // )
};

export default NewExpense;