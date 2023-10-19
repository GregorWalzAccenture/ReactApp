
import './App.css';
import React from 'react';
import Header from './Header';
import IntroText from './IntroText';
import SpookyElement from './SpookyElement';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <IntroText />

        <SpookyElement spookDescription="Minki" /> 
         <img src="https://media4.giphy.com/media/uWYjSbkIE2XIMIc7gh/giphy.webp?cid=ecf05e47avp4vwocig67nqolqvkrccpwz0kz0lo351m25ufg&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
        <SpookyElement spookDescription="Bärli" />
        <img src="https://i.imgur.com/iewaHVY.gif" />
        <SpookyElement spookDescription="Mikey" />
        <img src="https://media2.giphy.com/media/3ohhwfAa9rbXaZe86c/giphy.webp?cid=ecf05e47wfxe2kyr0vlit5s7ymlcqa1vwjpta9ib4mubebeq&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
        <SpookyElement spookDescription="Tom"/>
        <img src="https://media1.giphy.com/media/7702jh3NsloOseiDUk/200w.webp?cid=ecf05e47wfxe2kyr0vlit5s7ymlcqa1vwjpta9ib4mubebeq&ep=v1_gifs_search&rid=200w.webp&ct=g" />


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
