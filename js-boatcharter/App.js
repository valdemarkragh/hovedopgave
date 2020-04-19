import React, {Fragment} from 'react';
import './css/style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import {FrontPage} from './components/frontpage/FrontPage';
import {ShipPage} from './components/ships/ShipPage';
import {ArrangementPage} from './components/arrangement/ArrangementPage';

function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={FrontPage}/>
                    <Route path="/ship/:id" component={ShipPage}/>
                    <Route path="/arrangement/:id" component={ArrangementPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
