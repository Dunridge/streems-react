import React from 'react';
import {HeaderComponent} from './components/HeaderComponent';
import {FooterComponent} from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UsersComponent} from './components/UsersComponent';

const App: React.FC = () => {

    return (
        <React.Fragment>
            <HeaderComponent/>
            <div className="app">
                <div className="app_users">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={UsersComponent}/>
                        </Switch>
                    </Router>
                </div>
            </div>
            <FooterComponent/>
        </React.Fragment>
    );
}

export default App;
