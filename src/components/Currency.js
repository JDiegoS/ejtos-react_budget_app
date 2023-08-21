
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { dispatch, currency } = useContext(AppContext);
    const changeCurrency = (val) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };
    return (
        <div className={`alert alert-success`}>
            <span>Currency: ({currency})</span>
            <select className="custom-select selectC" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="$" name="marketing"> $ Dollar</option>
                <option value="£" name="sales">£ Pound</option>
                <option value="€" name="finance">€ Euro</option>
                <option value="₹" name="hr">₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Remaining;