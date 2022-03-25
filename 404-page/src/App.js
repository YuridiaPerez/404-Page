import './App.css';
import Scarecrow from './assests/Scarecrow.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
      <h1> 404 NOT FOUND</h1>
      <img className="Scarecrow" src={Scarecrow} />
      </div>
      <h3>I have bad news for you</h3>
      <p>The page you are looking for might be removed or is temporarily unavailable</p>
      <button type='submit'>back to homepage</button>
      <span>Create by Yuridia Pérez 💚 | devChallenges.io</span>
    </div>
  );
}

export default App;
