import './app.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import MainNavigation from './components/MainNavigation/MainNavigation';
import FrontPage from './components/pages/HomePage/HomePage';
import SignInPage from './components/pages/SignInPage/SignInPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import QuickPractisePage from './components/pages/QuickPractisePage/QuickPractisePage';
import QuickContestPage from './components/pages/QuickContestPage/QuickContestPage';
import FeedbackPage from './components/pages/FeedbackPage/FeedbackPage';

import LanguageProvider from './contexts/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainNavigation />
                        <FrontPage />
                    </Route>

                    <Route exact path="/sign-in">
                        <MainNavigation />
                        <SignInPage />
                    </Route>

                    <Route exact path="/sign-up">
                        <MainNavigation />
                        <SignUpPage />
                    </Route>

                    <Route exact path="/practise">
                        <MainNavigation />
                        <QuickPractisePage />
                    </Route>

                    <Route exact path="/contestPage">
                        <MainNavigation />
                        <QuickContestPage />
                    </Route>

                    <Route exact path="/feedback">
                        <MainNavigation />
                        <FeedbackPage />
                    </Route>
                </Switch>
            </Router>
        </LanguageProvider>
    );
}

export default App;
