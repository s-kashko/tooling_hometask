import React from 'react';
import logo from './logo.svg';
import './App.scss';
import styled from 'styled-components'

function App() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Title>
          Hello Styled!
      </Title>
      </header>
    </div>
  );
}

export default App;
