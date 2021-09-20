import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul id="exerciseList">
          Hi Steve! :)
        </ul>
      </header>
    </div>
  );
}

const exercises = ['pushup', 'pullup', 'arnold curl', 'close-grip benchpress']; 
const exerciseList = exercises.map((exercise, i) => <li class='exercise-'+{i}></li>)
ReactDOM.render(exerciseList, document.getElementById('exerciseList'));
export default App;
