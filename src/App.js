import './App.css';
import classes from './app.module.scss';


import MainMenu from './Components/MainMenu/MainMenu';
import Practice from './Components/Practice/Practice';
import KeyboardContainer from './Components/KeyboardContainer/KeyboardContainer';

function App() {
  return (
    <div className="App">
        <MainMenu />

        <KeyboardContainer 
            keyboardType = "swe-win"
        />

        {/* <Practice /> */}

    </div>
  );
}

export default App;
