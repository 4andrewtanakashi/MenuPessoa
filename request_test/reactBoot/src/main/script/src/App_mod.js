import React from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

function App() {

  const handlerChange = (event) => {React.setState( {request: event.target.value} )}

  const handlerSubmit = (event) => {
    event.preventDefault();
    var request = request.trim();

    if (!request) { return; }

    fetch(`/echo?request=${request}`)
      .then(response => { return response.text(); })
      .then(body => {alert(body); });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> it you will be well done ?</h2>
        <p>

        </p>
        
        <form className="App-intro" onSubmit={handlerSubmit}>
          <input type="text" onChange={handlerChange} /> 
          <input type="submit" value="Echo"/>
        </form>
      </header>
    </div>
  );
}

export default App;
