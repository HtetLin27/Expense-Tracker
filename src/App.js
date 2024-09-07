import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransitionList } from './components/TransitionList';

function App() {
  return (
    <div>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransitionList/>
      <AddTransaction/>
    </div>
  );
}

export default App;
