/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
//pages
import About from "../About/about";
import Contact from "../Contact/Contact";
import { useTheme } from "../Context/ThemeContext";
import Error404 from "../Error/404";
import Home from "../Home";

function Container() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Router>
        <div>
          <a
            href="#"
            id="btnTheme"
            className={`float-start theme-btn-${theme}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faMoon} />
          </a>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="activeElementNew" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error404} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Container;
