import './App.css'
import { calculateTermDeposit } from './calculations.tsx'
import { useState } from 'react'

function App() {
  const [result, setResult] = useState<{ total: number; taxAmount: number; interest: number; amount: number; bank: string }>();

  return (
    <>
      <h1>Term Deposit Calculator</h1>
      <div className='card'>
        <form onSubmit={(event) => {
          const calculatedResult = calculateTermDeposit(event);
          setResult(calculatedResult);
          console.log(calculatedResult);
        }}>
          <label>
            Select bank:
            <select name="banks" id="banks" defaultValue="">
              <option disabled value=""> -- select an option -- </option>
              <option value="Moneta">Moneta</option>
              <option value="Komerční banka">Komerční banka</option>
              <option value="ČSOB">ČSOB</option>
              <option value="Raiffeisenbank">Raiffeisenbank</option>
              <option value="Air Bank">Air Bank</option>
              <option value="Fio banka">Fio banka</option>
              <option value="Česká spořitelna">Česká spořitelna</option>
            </select>
          </label>
          <br />
          <label>
            Deposit amount:
            <input type="number" name="amount" id="amount" />
          </label>
          <br />
          <input type="submit" value="Calculate" />
        </form>
      </div>
      <div className='card'>
        <h2>Results</h2>
        {result && (
          <ul style={{ 
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            padding: '1.5em 0',
            margin: 0,
            listStyle: 'none',
          }}>
            <li>Bank: {result.bank}</li>
            <li>Tax Amount: {result.taxAmount}</li>
            <li>Amount: {result.amount}</li>
            <li>Interest: {result.interest}</li>
            <li>Total: {result.total}</li>
          </ul>
        )}
      </div>
    </>
  )
}

export default App
