import react from "react";
import "./Navbar.css";
import Content from "./Content";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

function Navbar() {
  const [isToggled, setToggled] = react.useState(false);

  function handleClicked(event) {
    setToggled(!isToggled);
  }
  return (
    <div className={`d-flex ${isToggled ? "toggled" : null}`} id="wrapper">
      <div className=" border-right bg-dark" id="sidebar-wrapper">
        <div className="sidebar-heading text-white">Keen </div>
        <div className="list-group list-group-flush ">
          
          <a
            href="#"
            className="list-group-item list-group-item-action text-light bg-dark "
          >
            Dashboard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-light bg-dark"
          >
            Navy Asida
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Navy Header
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Light Aside
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
           Brand Header
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Layout Builder
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Components
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Base
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Custom
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Extended
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Widgets
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Forms
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Keen Wizard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Keen Database
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            DataTables
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Icons
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-muted bg-dark"
          >
            Porlots
          </a>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button
            className="btn"
            id="menu-toggle"
            onClick={handleClicked}
          >
            <MenuIcon />
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="/">
                  <img className="round_img" src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="American flag"/>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <SearchIcon/> <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <NotificationsIcon />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <SettingsIcon />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                     Action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <AppsIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
        <Content />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
