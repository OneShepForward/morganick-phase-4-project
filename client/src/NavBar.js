import React from "react";
import "./styles/NavBar.css";
import Login from "./Login";
import Scores from "./Scores";
import Home from './Home';


import {
    Switch,
    Route,
    Link,
} from "react-router-dom";

function NavBar() {


    return (

    <div>
        <header class="header">
        <nav>
            <Link to="/">
                <h1 class="logo"><a href="/">Trebexia Trivia</a></h1>
            </Link> 

            <ul class="main-nav">
            <Link to="/">Home</Link>
            <Link to="/scores">Scores</Link>
            <Link to="/login">Login</Link>
            </ul>
        </nav>        
        </header> 


        <Switch>
            <Route path="/login">
                <Login />
            </Route>

            <Route path="/scores">
                <Scores />
            </Route>

            <Route path="/">
                <Home />
            </Route>


        </Switch>

    </div>

)
}

export default NavBar;