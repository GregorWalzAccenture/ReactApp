
import './App.css';
import React from 'react';
import Header from './Header';
import IntroText from './IntroText';
import Cats from './components/cats/Cats';
import Cat from './components/cats/Cat';
import Atmosphere from './components/atmosphere/Atmosphere';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Atmosphere />
        <IntroText />

        <Cats>
        <Cat animalPic="./img/cow1.jpg" animalName="Bärli" />
          <Cat animalPic="./img/cow2.jpg" animalName="Mikey" />
          <Cat animalPic="./img/cow3.jpg" animalName="Tom" />
          <Cat animalPic="./img/cat1.jpg" animalName="Minki" />
          <Cat animalPic="./img/cat2.jpg" animalName="Bärli" />
          <Cat animalPic="./img/cat3.jpg" animalName="Mikey" />
          <Cat animalPic="./img/cat4.jpg" animalName="Tom" />
        </Cats>
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
