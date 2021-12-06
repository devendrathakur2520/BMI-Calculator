import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from './App/App';
import { Users } from './UserForm';


export const Home = () => {
   
    return (
        <>
            <div>
                <Router>
                    <div>
                        <li>
                            <Link to="/App"></Link>
                            <Link to="/Users">Users</Link>
                        </li>
                        <Switch>

                            <Route path="/App">
                                <App/>
                            </Route>
                            <Route exact path="/Users">
                                <Users/>
                            </Route>
                        </Switch>

                    </div>
                </Router>
            </div>

           
        </>
    )
}