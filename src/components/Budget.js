

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const validateBudget = (val) => {

        if(val > 20000) {
            alert("The value cannot exceed budget  £20,000");
            budget = '';
            return;
        }
        else if(val < totalExpenses){
            alert("The value cannot be lower than the spending");
            budget = '';
            return;
        }
        else{
            budget = val
        }
    };

    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                        required='required'
                        type='number'
                        id='cost'
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => validateBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};
export default Budget;