import './App.css';
import classes from './app.module.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import MainMenu from './Components/MainMenu/MainMenu';
import FrontPage from './Components/Pages/FrontPage/FrontPage';
import LogInPage from './Components/Pages/LogInPage/LogInPage';
import SignUpPage from './Components/Pages/SignUpPage/SignUpPage';
import PractisePage from './Components/Pages/PractisePage/PractisePage';
import ContestPage from './Components/Pages/ContestPage/ContestPage';
import FeedbackPage from './Components/Pages/FeedbackPage/FeedbackPage';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <MainMenu />
                <FrontPage />
            </Route>

            <Route exact path="/sign-in">
                <MainMenu />
                <LogInPage />
            </Route>

            <Route exact path="/sign-up">
                <MainMenu />
                <SignUpPage />
            </Route>

            <Route exact path="/practise">
                <MainMenu />
                <PractisePage />
            </Route>

            <Route exact path="/contestPage">
                <MainMenu />
                <ContestPage />
            </Route>

            <Route exact path="/feedback">
                <MainMenu />
                <FeedbackPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
