import React, {useState} from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

function App() {

  const [,setValue] = useState("");

  const handlerChange = (event) => setValue(event.target.value);

  const handlerSubmit = (event) => {
    event.preventDefault();
    var request = " ";
    request = request.trim();

    if (!request) { return; }

    fetch(`/root?request=${request}`)
      .then(response => {return response.text(); } )
      .then(body => {alert(body); } );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Try Request !!!!
        </p>
        
      </header>
      <div> 
          <form className="App-intro" onSubmit={handlerSubmit}>
            <input type="text" onChange={handlerChange}/>
            <input type="submit" value="Root"/>
          </form>
      </div>
    </div>
  );
}

export default App;
