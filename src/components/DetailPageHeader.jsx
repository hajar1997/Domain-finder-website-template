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
import DetailPageSearchInput from './DetailPageSearchInput';


function DetailPageHeader() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='dtl-page-header'>
      <Navbar className='container detail-page-nav ms-x'  color="faded" expand={"lg"} light>
        <NavbarBrand href="/" className="newFont search-page-logo">
        DOMAINFINDER
        </NavbarBrand>
        <DetailPageSearchInput />
        <NavbarToggler onClick={toggleNavbar} className="nav-toggler me-2" />
        <Collapse className='flex-grow-0 nvbr-collapse' isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink  className='fw-semibold me-4 search-page-link' href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='fw-semibold me-4 search-page-link' href="/fordevelopers">
                For Developers
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default DetailPageHeader;