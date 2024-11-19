import React from "react";

const Invoices = () =>{
    return(
        <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Header */}
    <header className="header">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <a href="Home" className="navbar-brand logo">
            <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
          </a>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <a href="Home" className="menu-logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
            <a
              id="menu_close"
              className="menu-close"
              href="javascript:void(0);"
            >
              <i className="fas fa-times" />
            </a>
          </div>
          <ul className="main-nav">
            <li>
              <a href="/ ">Home</a>
            </li>
            <li className="has-submenu">
              <a href="#">
                Doctors <i className="fas fa-chevron-down" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="DoctorDashboard">Doctor Dashboard</a>
                </li>
                <li>
                  <a href="Appointments">Appointments</a>
                </li>
                <li>
                  <a href="ScheduleTimings">Schedule Timing</a>
                </li>
                <li>
                  <a href="MyPatients">Patients List</a>
                </li>
                <li>
                  <a href="PatientProfile">Patients Profile</a>
                </li>
                <li>
                  <a href="ChatDoctor">Chat</a>
                </li>
                <li>
                  <a href="Invoices">Invoices</a>
                </li>
                <li>
                  <a href="DoctorProfileSettings">Profile Settings</a>
                </li>
                <li>
                  <a href="Reviews">Reviews</a>
                </li>
                <li>
                  <a href="DoctorRegister">Doctor Register</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">
                Patients <i className="fas fa-chevron-down" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="Search">Search Doctor</a>
                </li>
                <li>
                  <a href="DoctorProfile">Doctor Profile</a>
                </li>
                <li>
                  <a href="Booking">Booking</a>
                </li>
                <li>
                  <a href="Checkout">Checkout</a>
                </li>
                <li>
                  <a href="BookingSuccess">Booking Success</a>
                </li>
                <li>
                  <a href="PatientDashboard">Patient Dashboard</a>
                </li>
                <li>
                  <a href="Favourites">Favourites</a>
                </li>
                <li>
                  <a href="Chat">Chat</a>
                </li>
                <li>
                  <a href="ProfileSettings">Profile Settings</a>
                </li>
                <li>
                  <a href="ChangePassword">Change Password</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu active">
              <a href="#">
                Pages <i className="fas fa-chevron-down" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="VoiceCall">Voice Call</a>
                </li>
                <li>
                  <a href="VideoCall">Video Call</a>
                </li>
                <li>
                  <a href="Search">Search Doctors</a>
                </li>
                <li>
                  <a href="Calendar">Calendar</a>
                </li>
                <li>
                  <a href="Components">Components</a>
                </li>
                <li className="has-submenu active">
                  <a href="Invoices">Invoices</a>
                  <ul className="submenu">
                    <li className="active">
                      <a href="Invoices">Invoices</a>
                    </li>
                    <li>
                      <a href="InvoiceView">Invoice View</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="BlankPage">Starter Page</a>
                </li>
                <li>
                  <a href="Login">Login</a>
                </li>
                <li>
                  <a href="Register">Register</a>
                </li>
                <li>
                  <a href="ForgotPassword">Forgot Password</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="admin/index.html" target="_blank">
                Admin
              </a>
            </li>
            <li className="login-link">
              <a href="Login">Login / Signup</a>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital" />
            </div>
            <div className="header-contact-detail">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header"> +1 315 369 5943</p>
            </div>
          </li>
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow logged-item">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="assets/img/doctors/doctor-thumb-02.jpg"
                  width={31}
                  alt="Darren Elder"
                />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="assets/img/doctors/doctor-thumb-02.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Darren Elder</h6>
                  <p className="text-muted mb-0">Doctor</p>
                </div>
              </div>
              <a className="dropdown-item" href="DoctorDashboard">
                Dashboard
              </a>
              <a className="dropdown-item" href="DoctorProfileSettings">
                Profile Settings
              </a>
              <a className="dropdown-item" href="Login">
                Logout
              </a>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
      </nav>
    </header>
    {/* /Header */}
    {/* Breadcrumb */}
    <div className="breadcrumb-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="Home">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Invoices
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Invoices</h2>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            {/* Profile Sidebar */}
            <div className="profile-sidebar">
              <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                  <a href="#" className="booking-doc-img">
                    <img
                      src="assets/img/doctors/doctor-thumb-02.jpg"
                      alt="User Image"
                    />
                  </a>
                  <div className="profile-det-info">
                    <h3>Dr. Darren Elder</h3>
                    <div className="patient-details">
                      <h5 className="mb-0">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-widget">
                <nav className="dashboard-menu">
                  <ul>
                    <li>
                      <a href="DoctorDashboard">
                        <i className="fas fa-columns" />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="Appointments">
                        <i className="fas fa-calendar-check" />
                        <span>Appointments</span>
                      </a>
                    </li>
                    <li>
                      <a href="MyPatients">
                        <i className="fas fa-user-injured" />
                        <span>My Patients</span>
                      </a>
                    </li>
                    <li>
                      <a href="ScheduleTimings">
                        <i className="fas fa-hourglass-start" />
                        <span>Schedule Timings</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="Invoices">
                        <i className="fas fa-file-invoice" />
                        <span>Invoices</span>
                      </a>
                    </li>
                    <li>
                      <a href="Reviews">
                        <i className="fas fa-star" />
                        <span>Reviews</span>
                      </a>
                    </li>
                    <li>
                      <a href="ChatDoctor">
                        <i className="fas fa-comments" />
                        <span>Message</span>
                        <small className="unread-msg">23</small>
                      </a>
                    </li>
                    <li>
                      <a href="DoctorProfileSettings">
                        <i className="fas fa-user-cog" />
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="SocialMedia">
                        <i className="fas fa-share-alt" />
                        <span>Social Media</span>
                      </a>
                    </li>
                    <li>
                      <a href="doctor-ChangePassword">
                        <i className="fas fa-lock" />
                        <span>Change Password</span>
                      </a>
                    </li>
                    <li>
                      <a href="Home">
                        <i className="fas fa-sign-out-alt" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* /Profile Sidebar */}
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card card-table">
              <div className="card-body">
                {/* Invoice Table */}
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Invoice No</th>
                        <th>Patient</th>
                        <th>Amount</th>
                        <th>Paid On</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0010</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Richard Wilson <span>#PT0016</span>
                            </a>
                          </h2>
                        </td>
                        <td>$450</td>
                        <td>14 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0009</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient1.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Charlene Reed <span>#PT0001</span>
                            </a>
                          </h2>
                        </td>
                        <td>$200</td>
                        <td>13 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0008</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient2.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Travis Trimble <span>#PT0002</span>
                            </a>
                          </h2>
                        </td>
                        <td>$100</td>
                        <td>12 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0007</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient3.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Carl Kelly <span>#PT0003</span>
                            </a>
                          </h2>
                        </td>
                        <td>$350</td>
                        <td>11 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0006</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient4.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Michelle Fairfax <span>#PT0004</span>
                            </a>
                          </h2>
                        </td>
                        <td>$275</td>
                        <td>10 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0005</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient5.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Gina Moore <span>#PT0005</span>
                            </a>
                          </h2>
                        </td>
                        <td>$600</td>
                        <td>9 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0004</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient6.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Elsie Gilley <span>#PT0006</span>
                            </a>
                          </h2>
                        </td>
                        <td>$50</td>
                        <td>8 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0003</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient7.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Joan Gardner <span>#PT0007</span>
                            </a>
                          </h2>
                        </td>
                        <td>$400</td>
                        <td>7 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0002</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient8.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Daniel Griffing <span>#PT0008</span>
                            </a>
                          </h2>
                        </td>
                        <td>$550</td>
                        <td>6 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="InvoiceView">#INV-0001</a>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="PatientProfile"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/img/patients/patient9.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="PatientProfile">
                              Walter Roberson <span>#PT0009</span>
                            </a>
                          </h2>
                        </td>
                        <td>$100</td>
                        <td>5 Nov 2019</td>
                        <td className="text-right">
                          <div className="table-action">
                            <a
                              href="InvoiceView"
                              className="btn btn-sm bg-info-light"
                            >
                              <i className="far fa-eye" /> View
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /Invoice Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Footer */}
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src="assets/img/footer-logo.png" alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-dribbble" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <a href="Search">
                      <i className="fas fa-angle-double-right" /> Search for
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a href="Login">
                      <i className="fas fa-angle-double-right" /> Login
                    </a>
                  </li>
                  <li>
                    <a href="Register">
                      <i className="fas fa-angle-double-right" /> Register
                    </a>
                  </li>
                  <li>
                    <a href="Booking">
                      <i className="fas fa-angle-double-right" /> Booking
                    </a>
                  </li>
                  <li>
                    <a href="PatientDashboard">
                      <i className="fas fa-angle-double-right" /> Patient
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li>
                    <a href="Appointments">
                      <i className="fas fa-angle-double-right" /> Appointments
                    </a>
                  </li>
                  <li>
                    <a href="Chat">
                      <i className="fas fa-angle-double-right" /> Chat
                    </a>
                  </li>
                  <li>
                    <a href="Login">
                      <i className="fas fa-angle-double-right" /> Login
                    </a>
                  </li>
                  <li>
                    <a href="DoctorRegister">
                      <i className="fas fa-angle-double-right" /> Register
                    </a>
                  </li>
                  <li>
                    <a href="DoctorDashboard">
                      <i className="fas fa-angle-double-right" /> Doctor
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    <p>
                      {" "}
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108{" "}
                    </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt" />
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope" />
                    doccure@example.com
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-fluid">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    <a href="templateshub.net">Templates Hub</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                {/* Copyright Menu */}
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <a href="Term&Condition">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="PrivacyPolicy">Policy</a>
                    </li>
                  </ul>
                </div>
                {/* /Copyright Menu */}
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
    {/* /Footer */}
  </div>
  {/* /Main Wrapper */}
</>

    )
}

export default Invoices;