import './App.css';
import react, { useState, useEffect } from 'react';
import User from './User';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
      .then((res) => res.json())
      .then((data) => {
        const newPeople = data.results;
        setPeople(newPeople);
        return newPeople;
      })

    },[])
    
  return (
    <div className="App">
       <h1> Address Book</h1>
       <ul> 
        {people.map((person) => {
       return < User person={person}/>
      })}
      </ul>
    </div>
  );
}

export default App;
