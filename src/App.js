import './App.css';
import classes from './app.module.scss';

import MainMenu from './Components/MainMenu/MainMenu';
import FrontPage from './Components/FrontPage/FrontPage';

function App() {
  return (
    <div className="App">
        <MainMenu />
        <FrontPage />
    </div>
  );
}

export default App;
