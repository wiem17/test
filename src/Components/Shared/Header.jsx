import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header sticky-bar">
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="index.html">
              <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" />
            </a>
          </div>
        </div>
        <div className="header-nav">
          <nav className="nav-main-menu">
            <ul className="main-menu">
              <li className="has-children">
                <a className="active" href="index.html">
                  Home
                </a>
               
              </li>
              <li className="has-children">
                <a href="jobs-grid.html">Find a Job</a>
                <ul className="sub-menu">
                  <li>
                    <a href="jobs-grid.html">Jobs Grid</a>
                  </li>
                  <li>
                  <Link to="/jobs">Jobs List</Link>
                  </li>
                  <li>
                    <a href="job-details.html">Jobs Details</a>
                  </li>
                  <li>
                    <a href="job-details-2.html">Jobs Details 2</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="companies-grid.html">Recruiters</a>
                <ul className="sub-menu">
                  <li>
                    <a href="companies-grid.html">Recruiters</a>
                  </li>
                  <li>
                    <a href="company-details.html">Company Details</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="candidates-grid.html">Candidates</a>
                <ul className="sub-menu">
                  <li>
                    <a href="candidates-grid.html">Candidates Grid</a>
                  </li>
                  <li>
                    <a href="candidate-details.html">Candidate Details</a>
                  </li>
                  <li>
                    <a href="candidate-profile.html">Candidate Profile</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="blog-grid.html">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">Pricing Plan</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-signin.html">Signin</a>
                  </li>
                  <li>
                    <a href="page-reset-password.html">Reset Password</a>
                  </li>
                  <li>
                    <a href="page-content-protected.html">Content Protected</a>
                  </li>
                  <li>
                    <a href="page-404.html">404 Error</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="blog-grid.html">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-grid-2.html">Blog Grid 2</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Single</a>
                  </li>
                </ul>
              </li>
            
            </ul>
          </nav>
          <div className="burger-icon burger-icon-white">
            <span className="burger-icon-top" />
            <span className="burger-icon-mid" />
            <span className="burger-icon-bottom" />
          </div>
        </div>
        <div className="header-right">
          <div className="block-signin">
            <a className="text-link-bd-btom hover-up" href="page-register.html">
              Register
            </a>
            <a
              className="btn btn-default btn-shadow ml-40 hover-up"
              href="page-signin.html"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
