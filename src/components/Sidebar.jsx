// Sidebar.js

import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUtilitiesOpen, setUtilitiesOpen] = useState(false);
  const [isComponentsOpen, setComponentsOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUtilities = () => {
    setUtilitiesOpen(!isUtilitiesOpen);
  };

  const toggleComponents = () => {
    setComponentsOpen(!isComponentsOpen);
  };

  const togglePages = () => {
    setPagesOpen(!isPagesOpen);
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
    <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isSidebarOpen ? 'toggled' : ''}`}>
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        {/* //<!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        {/* //<!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <button className="nav-link" onClick={toggleSidebar}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></button>
        </li>

        {/* //<!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* //<!-- Heading --> */}
        <div className="sidebar-heading">
            Interface
        </div>

        {/* //<!-- Nav Item - Pages Collapse Menu --> */}
        <li className={`nav-item ${isComponentsOpen ? 'active' : ''}`}>
            <button className={`nav-link ${isComponentsOpen ? '': 'collasped'}`}  onClick={toggleComponents}
                aria-expanded={isComponentsOpen} >
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </button>
            <div id="collapseTwo" className={`collapse ${isComponentsOpen? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </div>
            </div>
        </li>

        {/* //<!-- Nav Item - Utilities Collapse Menu --> */}
        <li className={`nav-item ${isUtilitiesOpen ? 'active' : ''}`}>
            <button className={`nav-link ${isUtilitiesOpen ? '' : 'collapsed'}`}
           
          onClick={toggleUtilities}
          aria-expanded={isUtilitiesOpen} style={{backgroundColor: 'transparent', border:'none'}}>
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </button>
            <div id="collapseUtilities" className={`collapse ${isUtilitiesOpen ? 'show' : ''}`} aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                    <a className="collapse-item" href="utilities-other.html">Other</a>
                </div>
            </div>
        </li>

        {/* //<!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* //<!-- Heading --> */}
        <div className="sidebar-heading">
            Addons
        </div>

        {/* //<!-- Nav Item - Pages Collapse Menu --> */}
        <li className={`nav-item ${isPagesOpen ? 'active' : ''}`}>
        <button
          className={`nav-link ${isPagesOpen ? '' : 'collapsed'}`}
          
          onClick={togglePages}
          aria-expanded={isPagesOpen}
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </button>
        <div className={`collapse ${isPagesOpen ? 'show' : ''}`} id="collapsePages" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>

        {/* //<!-- Nav Item - Charts --> */}
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

        {/* //<!-- Nav Item - Tables --> */}
        <li className="nav-item">
            <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
        </li>

        {/* //<!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block"/>

        {/* //<!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleSidebar}></button>
      </div>
    </ul>
    </div>
  );
};

export default Sidebar;
