
import { useState } from 'react';
import './App.css';


function App() {


  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" }
  ])


  const [filter, setFilter] = useState('all')

  let currentMoney = money;

  if (filter === 'ruble') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
  }
  if (filter === 'dollar') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
  }



  const onClickFilterHandler = (nameButton: string) => {
    setFilter(nameButton)
  }


  return (
    <>
      <ul>
        {currentMoney.map((objFromMoneyArr) => {
          return (
            <li>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{ marginLeft: '35px' }}>
        <button onClick={(event) => onClickFilterHandler('all')}>all</button>
        <button onClick={(event) => onClickFilterHandler('ruble')}>ruble</button>
        <button onClick={(event) => onClickFilterHandler('dollar')}>dollar</button>
      </div >

    </>

  );
}



export default App;
