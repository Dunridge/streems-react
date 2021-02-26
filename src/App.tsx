import React from 'react';
import {HeaderComponent} from './components/HeaderComponent';
import {FooterComponent} from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UsersComponent} from './components/UsersComponent';
import {UserDetailsComponent} from './components/UserDetailsComponent';

const App: React.FC = () => {

    return (
        <React.Fragment>
            <Router>
                <HeaderComponent/>
                <div className="app">
                    <div className="app_users">
                        <Switch>
                            <Route exact path="/" component={UsersComponent}/>
                            <Route path='/:id' component={UserDetailsComponent}/>
                        </Switch>
                    </div>
                </div>
                <FooterComponent/>
            </Router>
        </React.Fragment>
    );
}

export default App;
