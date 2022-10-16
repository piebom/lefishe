import logo from './logo.svg';
import './App.css';
import CustomHeader from './components/CustomHeader';
import ReactAudioPlayer from 'react-audio-player';
import { useEffect } from 'react';
import lefishe from './assets/lefishe.mp3';
import Player from './components/Player';
function App() {
  // set window title
  document.title = "Le Fishe - Home";
  useEffect(() => {
    var sample = document.getElementById("foobar");
    sample.play();  
  }, []);
  return (
    <div className="App">
       <audio id="foobar" src={lefishe} preload="auto"/> 
      <CustomHeader/>
      <div className="main">
        <h1>Coming soon...</h1>
      </div>
    </div>
  );
}

export default App;
