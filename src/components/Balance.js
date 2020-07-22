import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // const amounts = transactions.map(transaction => transaction.amount);
    // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    //  const sign = transactions.amount < 0 ? '-' : '+';


    
    return (
        <div>
            <h4>CURRENT BALANCE</h4>
            <h1>${getIncome() + getExpense()}</h1>
        </div>
    )
}