import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransitionList = () => {
  const {transactions} = useContext(GlobalContext);
  
  console.log('context',transactions)

  return (
    <>
        <h3>History</h3>
        <ul>
          {transactions.map((transaction)=>(
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
          <li>
            Cash
            <span>-$400</span>
            <button>x</button>
          </li>
          
        </ul>
    </>
  )
}
