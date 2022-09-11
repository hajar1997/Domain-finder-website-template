import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='container ms-x'  color="faded" expand={"lg"} light>
        <NavbarBrand href="/" className="me-auto newFont">
        DOMAINFINDER
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="nav-toggler me-2" />
        <Collapse className='flex-grow-0' isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink  className='fw-semibold me-4' href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='fw-semibold me-4' href="/fordevelopers">
                For Developers
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;