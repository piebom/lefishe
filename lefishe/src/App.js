import './App.css';
import CustomHeader from './components/CustomHeader/CustomHeader';
import ProfileBox from './components/ProfileBox/ProfileBox';
function App() {
  // set window title
  document.title = "Le Fishe - Home";
  return (
      <div className="main">
            <ProfileBox/>
        <h1>Coming soon...</h1>
      </div>
  );
}

export default App;
