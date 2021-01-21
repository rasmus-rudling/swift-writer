import './App.css';
import Keyboard from './Components/KeyBoard/keyboard';
import MainMenu from './Components/MainMenu/mainMenu';
import Hands from './Components/Hands/hands';

function App() {
  return (
    <div className="App">
        <MainMenu />

        <Keyboard />

        <Hands />
    </div>
  );
}

export default App;
