import './App.css';
import classes from './app.module.scss';


import MainMenu from './Components/MainMenu/MainMenu';
import LeftHand from './Components/LeftHand/LeftHand';
import RightHand from './Components/RightHand/RightHand';
import SweWinKeyboard from './Components/Keyboards/Swedish/Windows/SweWinKeyboard';
import Practice from './Components/Practice/Practice';

function App() {
  return (
    <div className="App">
        <MainMenu />

        <Practice />
        <div className={classes.keyboard}>
            <LeftHand />
            <SweWinKeyboard />
            <RightHand />
        </div>
    </div>
  );
}

export default App;
