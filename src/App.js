import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransitionList } from './components/TransitionList';

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <div className='App'>
    <GlobalProvider >
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransitionList/>
      <AddTransaction/>
    </GlobalProvider>
    </div>
  );
}

export default App;
