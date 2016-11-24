import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../shared/nav';
import Header from '../shared/header';

function App() {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.querySelector('.app'));
