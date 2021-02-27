import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Users} from './components/Users';
// TODO: fix this type error
//@ts-ignore
import {UserDetails} from './components/UserDetails';

const App: React.FC = () => {

    return (
        <React.Fragment>
            <Router>
                <Header/>
                <div className="app">
                    <div className="app_users">
                        <Switch>
                            <Route exact path="/" component={Users}/>
                            <Route path='/:id' component={UserDetails}/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </Router>
        </React.Fragment>
    );
}

export default App;
