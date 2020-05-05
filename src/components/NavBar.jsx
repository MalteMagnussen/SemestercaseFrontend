import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("#/");
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand
        onClick={() => setSelectedNavItem("#/")}
        href="#/"
        style={{ marginLeft: "37px" }}
      >
        Fullstack
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey={selectedNavItem}
          onSelect={(selectedKey) => setSelectedNavItem(selectedKey)}
          defaultActiveKey="#/"
        >
          {/* <Nav.Link href="#/map">Map</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
