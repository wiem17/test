import React from 'react'


function Post() {
  return (
   
      <> 
      <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="text-center">
          <img src="assets/imgs/template/loading.gif" alt="jobBox" />
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="ModalApplyJobForm"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content apply-job-form">
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="modal-body pl-30 pr-30 pt-50">
          <div className="text-center">
            <p className="font-sm text-brand-2">Job Application </p>
            <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
              Start your career today
            </h2>
            <p className="font-sm text-muted mb-30">
              Please fill in your information and send it to the employer.{" "}
            </p>
          </div>
          <form className="login-register text-start mt-20 pb-30" action="#">
            <div className="form-group">
              <label className="form-label" htmlFor="input-1">
                Full Name *
              </label>
              <input
                className="form-control"
                id="input-1"
                type="text"
                required=""
                name="fullname"
                placeholder="Steven Job"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="input-2">
                Email *
              </label>
              <input
                className="form-control"
                id="input-2"
                type="email"
                required=""
                name="emailaddress"
                placeholder="stevenjob@gmail.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="number">
                Contact Number *
              </label>
              <input
                className="form-control"
                id="number"
                type="text"
                required=""
                name="phone"
                placeholder="(+01) 234 567 89"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="des">
                Description
              </label>
              <input
                className="form-control"
                id="des"
                type="text"
                required=""
                name="Description"
                placeholder="Your description..."
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="file">
                Upload Resume
              </label>
              <input
                className="form-control"
                id="file"
                name="resume"
                type="file"
              />
            </div>
            <div className="login_footer form-group d-flex justify-content-between">
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">Agree our terms and policy</span>
                <span className="checkmark" />
              </label>
              <a className="text-muted" href="page-contact.html">
                Lean more
              </a>
            </div>
            <div className="form-group">
              <button
                className="btn btn-default hover-up w-100"
                type="submit"
                name="login"
              >
                Apply Job
              </button>
            </div>
            <div className="text-muted text-center">
              Do you need support? <a href="page-contact.html">Contact Us</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
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
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="index-6.html">Home 6</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="jobs-grid.html">Find a Job</a>
                <ul className="sub-menu">
                  <li>
                    <a href="jobs-grid.html">Jobs Grid</a>
                  </li>
                  <li>
                    <a href="jobs-list.html">Jobs List</a>
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
              <li className="dashboard">
                <a
                  href="http://wp.alithemes.com/html/jobbox/demos/dashboard"
                  target="_blank"
                >
                  Dashboard
                </a>
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
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-search mobile-header-border mb-30">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <i className="fi-rr-search" />
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="mobile-menu font-heading">
                <li className="has-children">
                  <a className="active" href="index.html">
                    Home
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 4</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home 5</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home 6</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="jobs-grid.html">Find a Job</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="jobs-grid.html">Jobs Grid</a>
                    </li>
                    <li>
                      <a href="jobs-list.html">Jobs List</a>
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
                      <a href="page-content-protected.html">
                        Content Protected
                      </a>
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
                <li>
                  <a
                    href="http://wp.alithemes.com/html/jobbox/demos/dashboard"
                    target="_blank"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-account">
            <h6 className="mb-10">Your Account</h6>
            <ul className="mobile-menu font-heading">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Work Preferences</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Go Pro</a>
              </li>
              <li>
                <a href="page-signin.html">Sign Out</a>
              </li>
            </ul>
          </div>
          <div className="site-copyright">
            Copyright 2022 © JobBox.
            <br />
            Designed by AliThemes.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-search mobile-header-border mb-30">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <i className="fi-rr-search" />
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="mobile-menu font-heading">
                <li className="has-children">
                  <a className="active" href="index.html">
                    Home
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 4</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home 5</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home 6</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="jobs-grid.html">Find a Job</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="jobs-grid.html">Jobs Grid</a>
                    </li>
                    <li>
                      <a href="jobs-list.html">Jobs List</a>
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
                      <a href="page-content-protected.html">
                        Content Protected
                      </a>
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
                <li>
                  <a
                    href="http://wp.alithemes.com/html/jobbox/demos/dashboard"
                    target="_blank"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-account">
            <h6 className="mb-10">Your Account</h6>
            <ul className="mobile-menu font-heading">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Work Preferences</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Go Pro</a>
              </li>
              <li>
                <a href="page-signin.html">Sign Out</a>
              </li>
            </ul>
          </div>
          <div className="site-copyright">
            Copyright 2022 © JobBox.
            <br />
            Designed by AliThemes.
          </div>
        </div>
      </div>
    </div>
  </div>
  <main className="main">
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-single banner-single-bg">
          <div className="block-banner text-center">
            <h3 className="wow animate__animated animate__fadeInUp">
              <span className="color-brand-2">22 Jobs</span> Available Now
            </h3>
            <div
              className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus magni, <br className="d-none d-xl-block" />
              atque delectus molestias quis?
            </div>
            <div
              className="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
              data-wow-delay=".2s"
            >
              <form>
                <div className="box-industry">
                  <select className="form-input mr-10 select-active input-industry">
                    <option value={0}>Industry</option>
                    <option value={1}>Software</option>
                    <option value={2}>Finance</option>
                    <option value={3}>Recruting</option>
                    <option value={4}>Management</option>
                    <option value={5}>Advertising</option>
                    <option value={6}>Development</option>
                  </select>
                </div>
                <select className="form-input mr-10 select-active">
                  <option value="">Location</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="PW">Belau</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo (Brazzaville)</option>
                  <option value="CD">Congo (Kinshasa)</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">CuraÇao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and McDonald Islands</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao S.A.R., China</option>
                  <option value="MK">Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Netherlands Antilles</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="KP">North Korea</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PS">Palestinian Territory</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="QA">Qatar</option>
                  <option value="IE">Republic of Ireland</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="ST">São Tomé and Príncipe</option>
                  <option value="BL">Saint Barthélemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="SX">Saint Martin (Dutch part)</option>
                  <option value="MF">Saint Martin (French part)</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="SM">San Marino</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia/Sandwich Islands</option>
                  <option value="KR">South Korea</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom (UK)</option>
                  <option value="US">USA (US)</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="WS">Western Samoa</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                <input
                  className="form-input input-keysearch mr-10"
                  type="text"
                  placeholder="Your keyword... "
                />
                <button className="btn btn-default btn-find font-sm">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box mt-30">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
            <div className="content-page">
              <div className="box-filters-job">
                <div className="row">
                  <div className="col-xl-6 col-lg-5">
                    <span className="text-small text-showing">
                      Showing <strong>41-60 </strong>of <strong>944 </strong>
                      jobs
                    </span>
                  </div>
                  <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                    <div className="display-flex2">
                      <div className="box-border mr-10">
                        <span className="text-sortby">Show:</span>
                        <div className="dropdown dropdown-sort">
                          <button
                            className="btn dropdown-toggle"
                            id="dropdownSort"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-display="static"
                          >
                            <span>12</span>
                            <i className="fi-rr-angle-small-down" />
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownSort"
                          >
                            <li>
                              <a className="dropdown-item active" href="#">
                                10
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                12
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                20
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-border">
                        <span className="text-sortby">Sort by:</span>
                        <div className="dropdown dropdown-sort">
                          <button
                            className="btn dropdown-toggle"
                            id="dropdownSort2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-display="static"
                          >
                            <span>Newest Post</span>
                            <i className="fi-rr-angle-small-down" />
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownSort2"
                          >
                            <li>
                              <a className="dropdown-item active" href="#">
                                Newest Post
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Oldest Post
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Rating Post
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-view-type">
                        <a className="view-type" href="jobs-list.html">
                          <img
                            src="assets/imgs/template/icons/icon-list.svg"
                            alt="jobBox"
                          />
                        </a>
                        <a className="view-type" href="jobs-grid.html">
                          <img
                            src="assets/imgs/template/icons/icon-grid-hover.svg"
                            alt="jobBox"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row display-list">
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-1.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              LinkedIn
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">UI / UX Designer fulltime</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          <span>4</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-2.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Adobe Ilustrator
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">Full Stack Engineer</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          <span>5</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-3.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Bing Search
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">Java Software Engineer</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-4.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Dailymotion
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">Frontend Developer</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-5.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Linkedin
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">
                          React Native Web Developer
                        </a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          <span>4</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-6.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Quora JSC
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">Senior System Engineer</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          <span>5</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-7.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Nintendo
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">Products Manager</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <img
                              src="assets/imgs/brands/brand-8.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <a className="name-job" href="">
                              Periscope
                            </a>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <a className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </a>
                          <a className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <a href="job-details.html">Lead Quality Control QA</a>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> mins ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div
                              className="btn btn-apply-now"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalApplyJobForm"
                            >
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="paginations">
              <ul className="pager">
                <li>
                  <a className="pager-prev" href="#" />
                </li>
                <li>
                  <a className="pager-number" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="pager-number" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="pager-number" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="pager-number" href="#">
                    4
                  </a>
                </li>
                <li>
                  <a className="pager-number" href="#">
                    5
                  </a>
                </li>
                <li>
                  <a className="pager-number active" href="#">
                    6
                  </a>
                </li>
                <li>
                  <a className="pager-number" href="#">
                    7
                  </a>
                </li>
                <li>
                  <a className="pager-next" href="#" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="sidebar-shadow none-shadow mb-30">
              <div className="sidebar-filters">
                <div className="filter-block head-border mb-30">
                  <h5>
                    Advance Filter{" "}
                    <a className="link-reset" href="#">
                      Reset
                    </a>
                  </h5>
                </div>
                <div className="filter-block mb-30">
                  <div className="form-group select-style select-style-icon">
                    <select className="form-control form-icons select-active">
                      <option>New York, US</option>
                      <option>London</option>
                      <option>Paris</option>
                      <option>Berlin</option>
                    </select>
                    <i className="fi-rr-marker" />
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="medium-heading mb-15">Industry</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">All</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">180</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Software</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Finance</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">23</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Recruting</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">43</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Management</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Advertising</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">76</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="medium-heading mb-25">Salary Range</h5>
                  <div className="list-checkbox pb-20">
                    <div className="row position-relative mt-10 mb-20">
                      <div className="col-sm-12 box-slider-range">
                        <div id="slider-range" />
                      </div>
                      <div className="box-input-money">
                        <input
                          className="input-disabled form-control min-value-money"
                          type="text"
                          name="min-value-money"
                          disabled="disabled"
                          defaultValue=""
                        />
                        <input
                          className="form-control min-value"
                          type="hidden"
                          name="min-value"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="box-number-money">
                      <div className="row mt-30">
                        <div className="col-sm-6 col-6">
                          <span className="font-sm color-brand-1">$0</span>
                        </div>
                        <div className="col-sm-6 col-6 text-end">
                          <span className="font-sm color-brand-1">$500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-20">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">All</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">145</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$0k - $20k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$20k - $40k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">37</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$40k - $60k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">75</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$60k - $80k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">98</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$80k - $100k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">14</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$100k - $200k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">25</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Popular Keyword</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">Software</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">24</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Developer</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">45</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Web</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">57</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Position</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Senior</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">Junior</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">35</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Fresher</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Experience Level</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Internship</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Entry Level</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">87</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">Associate</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">24</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Mid Level</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">45</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Director</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">76</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Executive</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">89</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">On-site</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">Remote</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Hybrid</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">58</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Job Posted</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">All</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">1 day</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">7 days</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">24</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">30 days</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="medium-heading mb-15">Job type</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Full Time</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">25</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">Part Time</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">64</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Remote Jobs</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Freelancer</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">97</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="text-start">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            News and Blog
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Get the latest news, updates and tips
          </p>
        </div>
      </div>
      <div className="container">
        <div className="mt-50">
          <div className="box-swiper style-nav-top">
            <div className="swiper-container swiper-group-3 swiper">
              <div className="swiper-wrapper pb-70 pt-5">
                <div className="swiper-slide">
                  <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                    <div className="text-center card-grid-3-image">
                      <a href="#">
                        <figure>
                          <img
                            alt="jobBox"
                            src="assets/imgs/page/homepage1/img-news1.png"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="card-block-info">
                      <div className="tags mb-15">
                        <a className="btn btn-tag" href="blog-grid.html">
                          News
                        </a>
                      </div>
                      <h5>
                        <a href="blog-details.html">
                          21 Job Interview Tips: How To Make a Great Impression
                        </a>
                      </h5>
                      <p className="mt-10 color-text-paragraph font-sm">
                        Our mission is to create the world&amp;rsquo;s most
                        sustainable healthcare company by creating high-quality
                        healthcare products in iconic, sustainable packaging.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <div className="d-flex">
                              <img
                                className="img-rounded"
                                src="assets/imgs/page/homepage1/user1.png"
                                alt="jobBox"
                              />
                              <div className="info-right-img">
                                <span className="font-sm font-bold color-brand-1 op-70">
                                  Sarah Harding
                                </span>
                                <br />
                                <span className="font-xs color-text-paragraph-2">
                                  06 September
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-end col-6 pt-15">
                            <span className="color-text-paragraph-2 font-xs">
                              8 mins to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                    <div className="text-center card-grid-3-image">
                      <a href="#">
                        <figure>
                          <img
                            alt="jobBox"
                            src="assets/imgs/page/homepage1/img-news2.png"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="card-block-info">
                      <div className="tags mb-15">
                        <a className="btn btn-tag" href="blog-grid.html">
                          Events
                        </a>
                      </div>
                      <h5>
                        <a href="blog-details.html">
                          39 Strengths and Weaknesses To Discuss in a Job
                          Interview
                        </a>
                      </h5>
                      <p className="mt-10 color-text-paragraph font-sm">
                        Our mission is to create the world&amp;rsquo;s most
                        sustainable healthcare company by creating high-quality
                        healthcare products in iconic, sustainable packaging.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <div className="d-flex">
                              <img
                                className="img-rounded"
                                src="assets/imgs/page/homepage1/user2.png"
                                alt="jobBox"
                              />
                              <div className="info-right-img">
                                <span className="font-sm font-bold color-brand-1 op-70">
                                  Steven Jobs
                                </span>
                                <br />
                                <span className="font-xs color-text-paragraph-2">
                                  06 September
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-end col-6 pt-15">
                            <span className="color-text-paragraph-2 font-xs">
                              6 mins to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                    <div className="text-center card-grid-3-image">
                      <a href="#">
                        <figure>
                          <img
                            alt="jobBox"
                            src="assets/imgs/page/homepage1/img-news3.png"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="card-block-info">
                      <div className="tags mb-15">
                        <a className="btn btn-tag" href="blog-grid.html">
                          News
                        </a>
                      </div>
                      <h5>
                        <a href="blog-details.html">
                          Interview Question: Why Dont You Have a Degree?
                        </a>
                      </h5>
                      <p className="mt-10 color-text-paragraph font-sm">
                        Learn how to respond if an interviewer asks you why you
                        dont have a degree, and read example answers that can
                        help you craft
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <div className="d-flex">
                              <img
                                className="img-rounded"
                                src="assets/imgs/page/homepage1/user3.png"
                                alt="jobBox"
                              />
                              <div className="info-right-img">
                                <span className="font-sm font-bold color-brand-1 op-70">
                                  Wiliam Kend
                                </span>
                                <br />
                                <span className="font-xs color-text-paragraph-2">
                                  06 September
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-end col-6 pt-15">
                            <span className="color-text-paragraph-2 font-xs">
                              9 mins to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
          <div className="text-center">
            <a
              className="btn btn-brand-1 btn-icon-load mt--30 hover-up"
              href="blog-grid.html"
            >
              Load More Posts
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section-box mt-50 mb-20">
      <div className="container">
        <div className="box-newsletter">
          <div className="row">
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <img
                src="assets/imgs/template/newsletter-left.png"
                alt="joxBox"
              />
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              <h2 className="text-md-newsletter text-center">
                New Things Will Always
                <br /> Update Regularly
              </h2>
              <div className="box-form-newsletter mt-40">
                <form className="form-newsletter">
                  <input
                    className="input-newsletter"
                    type="text"
                    defaultValue=""
                    placeholder="Enter your email here"
                  />
                  <button className="btn btn-default font-heading icon-send-letter">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <img
                src="assets/imgs/template/newsletter-right.png"
                alt="joxBox"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer mt-50">
    <div className="container">
      <div className="row">
        <div className="footer-col-1 col-md-3 col-sm-12">
          <a href="index.html">
            <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" />
          </a>
          <div className="mt-20 mb-20 font-xs color-text-paragraph-2">
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </div>
          <div className="footer-social">
            <a className="icon-socials icon-facebook" href="#" />
            <a className="icon-socials icon-twitter" href="#" />
            <a className="icon-socials icon-linkedin" href="#" />
          </div>
        </div>
        <div className="footer-col-2 col-md-2 col-xs-6">
          <h6 className="mb-20">Resources</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-3 col-md-2 col-xs-6">
          <h6 className="mb-20">Community</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Credit</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-4 col-md-2 col-xs-6">
          <h6 className="mb-20">Quick links</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">iOS</a>
            </li>
            <li>
              <a href="#">Android</a>
            </li>
            <li>
              <a href="#">Microsoft</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-5 col-md-2 col-xs-6">
          <h6 className="mb-20">More</h6>
          <ul className="menu-footer">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-6 col-md-3 col-sm-12">
          <h6 className="mb-20">Download App</h6>
          <p className="color-text-paragraph-2 font-xs">
            Download our Apps and get extra 15% Discount on your first Order…!
          </p>
          <div className="mt-15">
            <a className="mr-5" href="#">
              <img
                src="assets/imgs/template/icons/app-store.png"
                alt="joxBox"
              />
            </a>
            <a href="#">
              <img src="assets/imgs/template/icons/android.png" alt="joxBox" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-50">
        <div className="row">
          <div className="col-md-6">
            <span className="font-xs color-text-paragraph">
              Copyright © 2022. JobBox all right reserved
            </span>
          </div>
          <div className="col-md-6 text-md-end text-start">
            <div className="footer-social">
              <a className="font-xs color-text-paragraph" href="#">
                Privacy Policy
              </a>
              <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">
                Terms &amp; Conditions
              </a>
              <a className="font-xs color-text-paragraph" href="#">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>


   
      )}
 export default Post    