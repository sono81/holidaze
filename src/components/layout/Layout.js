import React from "react";
import Logo from "../../images/layout/logo_text_100.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchBar from "../functional/SearchBar";

function Layout() {
  return (
    <Router>
      <header>
        <img src={Logo} alt="Holidaze logo" />
        <SearchBar />
        <nav>
          <ul className="menu">
            <li>
              <NavLink to="/" className="menu__item">Search</NavLink>
            </li>
            <li>
              <NavLink to="/" className="menu__item">Browse</NavLink>
            </li>
            <li>
              <NavLink to="/" className="menu__item menu__item--underline">Log in</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/" />
          <Route path="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default Layout;
