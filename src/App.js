
import './App.css';
import React from 'react';
import Header from './Header';
import IntroText from './IntroText';
import Cat from './Cat';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Atmosphere />
        <IntroText />

        <Cat animalName="Minki" />
        <Cat animalName="Bärli" />
        <Cat animalName="Mikey" />
        <Cat animalName="Tom" />

      </div>  
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        
      </header>
    </div>
  );
}
*/

export default App;
