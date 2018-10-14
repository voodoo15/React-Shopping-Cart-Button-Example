import React, {Component} from 'react';

class NavBar extends Component {

  render() {
    const {totalCounter} = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar {" "}
          <span className="badge badge-pill badge-secondary">
          {totalCounter}
          </span>
        </a>
      </nav>
    );
  };

};

export default NavBar;
