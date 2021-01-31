import './App.css';
import classes from './app.module.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import MainMenu from './Components/MainMenu/MainMenu';
import FrontPage from './Components/Pages/FrontPage/FrontPage';
import SignInPage from './Components/Pages/SignInPage/SignInPage';
import SignUpPage from './Components/Pages/SignUpPage/SignUpPage';
import QuickPractisePage from './Components/Pages/QuickPractisePage/QuickPractisePage';
import QuickContestPage from './Components/Pages/QuickContestPage/QuickContestPage';
import FeedbackPage from './Components/Pages/FeedbackPage/FeedbackPage';

import LanguageProvider from './Contexts/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainMenu />
                        <FrontPage />
                    </Route>

                    <Route exact path="/sign-in">
                        <MainMenu />
                        <SignInPage />
                    </Route>

                    <Route exact path="/sign-up">
                        <MainMenu />
                        <SignUpPage />
                    </Route>

                    <Route exact path="/practise">
                        <MainMenu />
                        <QuickPractisePage />
                    </Route>

                    <Route exact path="/contestPage">
                        <MainMenu />
                        <QuickContestPage />
                    </Route>

                    <Route exact path="/feedback">
                        <MainMenu />
                        <FeedbackPage />
                    </Route>
                </Switch>
            </Router>
        </LanguageProvider>
    );
}

export default App;
