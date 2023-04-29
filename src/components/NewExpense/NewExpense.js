import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseDate = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDate);
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm  onSaveExpenseDate={saveExpenseDateHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;