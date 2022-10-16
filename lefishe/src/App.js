import './App.css';
import CustomHeader from './components/CustomHeader';
import lefishe from './assets/lefishe.mp3';
function App() {
  // set window title
  document.title = "Le Fishe - Home";
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
