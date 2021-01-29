import React from "react";
import Logo from "../../images/layout/logo_text_100.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import { HashLink as Link } from "react-router-hash-link";
import Establishment from "./Establishment";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ContactPage from "./ContactPage";

function Layout() {
  return (
    <Router>
      <header>
        <NavLink to="/">
          <img src={Logo} alt="Holidaze logo" />
        </NavLink>
        <nav>
          <ul className="menu">
            <li>
              <NavLink to="/" className="menu__item">
                Search
              </NavLink>
            </li>
            <li>
              <Link to="/#establishment" className="menu__item">
                Browse
              </Link>
            </li>
            <li>
              <NavLink to="/Contact" className="menu__item">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/Login" className="menu__item menu__item--underline">
                Log in
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Login" component={Login} />
          <Route path="/establishment/:id" component={Establishment} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Contact" component={ContactPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default Layout;
