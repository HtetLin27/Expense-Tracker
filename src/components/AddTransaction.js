import React, { useState } from 'react'

export const AddTransaction = () => {
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);
  return (
    <>
    <h3>Add new transaction</h3>
    <form>
        <div>
            <label htmlFor="text">Text</label>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder='Enter text...' />
        </div>
        <div>
            <label htmlFor="amount">
                Amount <br />
                (negative - expense, postive - income)
            </label>
            <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} type="number"  placeholder='Enter amount...'/>
        </div>
        <button>Add transaction</button>
    </form>

    </>
  )
}
