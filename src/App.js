import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState, useEffect } from 'react';
import UserContext from './Contexts/UserContext';

function App() {
  const [modal, setModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [resumo, setResumo] = useState({ credit: 0, debit: 0, balance: 0 });
  const valuesProvider = { modal, setModal, transactions, setTransactions, resumo, setResumo };

  useEffect(() => {
    loadTransactions();
  }, []);

  useEffect(() => {
    console.log(resumo);
  }, [resumo]);

  async function loadTransactions() {
    try {
      const response = await fetch('http://localhost:3333/transactions', {
        method: 'GET'
      });

      const data = await response.json();

      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const sumCredit = transactions.reduce((acum, item) => {
      return item.type === 'credit' ? acum + Number(item.value) : acum + 0;
    }, 0);

    const sumDebit = transactions.reduce((acum, item) => {
      return item.type === 'debit' ? acum + Number(item.value) : acum + 0;
    }, 0);

    setResumo({
      credit: sumCredit,
      debit: sumDebit,
      balance: sumCredit - sumDebit
    });
  }, [transactions]);

  return (
    <UserContext.Provider value={valuesProvider}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </UserContext.Provider>
  );
}

export default App;
