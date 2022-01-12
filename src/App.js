import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState, useEffect } from 'react';
import UserContext from './Contexts/UserContext';

function App() {
  const [modal, setModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const valuesProvider = { modal, setModal, transactions, setTransactions };

  useEffect(() => {
    loadTransactions();
  }, []);

  // useEffect(() => {
  //   console.log(transactions);
  // }, [transactions]);

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
