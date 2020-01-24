import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <h1 id="heading">
          <img
            id="logo"
            alt="main"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Reddit_logo_orange.svg/1024px-Reddit_logo_orange.svg.png"
          />
          reddit
          <input type="text" placeholder="Search Reddit" />
        </h1>
      </div>
    );
  }
}
export default Navbar;
