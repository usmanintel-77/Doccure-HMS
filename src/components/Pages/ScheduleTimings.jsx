import React from "react";

const ScheduleTimings = () => {
    return (
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
            <li className="has-submenu active">
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
                <li className="active">
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
            <li className="has-submenu">
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
                <li className="has-submenu">
                  <a href="Invoices">Invoices</a>
                  <ul className="submenu">
                    <li>
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
                  Schedule Timings
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Schedule Timings</h2>
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
                    <li className="active">
                      <a href="ScheduleTimings">
                        <i className="fas fa-hourglass-start" />
                        <span>Schedule Timings</span>
                      </a>
                    </li>
                    <li>
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
                      <a href="DoctorChangePassword">
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
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Schedule Timings</h4>
                    <div className="profile-box">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Timing Slot Duration</label>
                            <select className="select form-control">
                              <option>-</option>
                              <option>15 mins</option>
                              <option selected="selected">30 mins</option>
                              <option>45 mins</option>
                              <option>1 Hour</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card schedule-widget mb-0">
                            {/* Schedule Header */}
                            <div className="schedule-header">
                              {/* Schedule Nav */}
                              <div className="schedule-nav">
                                <ul className="nav nav-tabs nav-justified">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_sunday"
                                    >
                                      Sunday
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      data-toggle="tab"
                                      href="#slot_monday"
                                    >
                                      Monday
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_tuesday"
                                    >
                                      Tuesday
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_wednesday"
                                    >
                                      Wednesday
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_thursday"
                                    >
                                      Thursday
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_friday"
                                    >
                                      Friday
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#slot_saturday"
                                    >
                                      Saturday
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /Schedule Nav */}
                            </div>
                            {/* /Schedule Header */}
                            {/* Schedule Content */}
                            <div className="tab-content schedule-cont">
                              {/* Sunday Slot */}
                              <div id="slot_sunday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Sunday Slot */}
                              {/* Monday Slot */}
                              <div
                                id="slot_monday"
                                className="tab-pane fade show active"
                              >
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#edit_time_slot"
                                  >
                                    <i className="fa fa-edit mr-1" />
                                    Edit
                                  </a>
                                </h4>
                                {/* Slot List */}
                                <div className="doc-times">
                                  <div className="doc-slot-list">
                                    8:00 pm - 11:30 pm
                                    <a
                                      href="javascript:void(0)"
                                      className="delete_schedule"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                  <div className="doc-slot-list">
                                    11:30 pm - 1:30 pm
                                    <a
                                      href="javascript:void(0)"
                                      className="delete_schedule"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                  <div className="doc-slot-list">
                                    3:00 pm - 5:00 pm
                                    <a
                                      href="javascript:void(0)"
                                      className="delete_schedule"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                  <div className="doc-slot-list">
                                    6:00 pm - 11:00 pm
                                    <a
                                      href="javascript:void(0)"
                                      className="delete_schedule"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </div>
                                {/* /Slot List */}
                              </div>
                              {/* /Monday Slot */}
                              {/* Tuesday Slot */}
                              <div id="slot_tuesday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Tuesday Slot */}
                              {/* Wednesday Slot */}
                              <div
                                id="slot_wednesday"
                                className="tab-pane fade"
                              >
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Wednesday Slot */}
                              {/* Thursday Slot */}
                              <div id="slot_thursday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Thursday Slot */}
                              {/* Friday Slot */}
                              <div id="slot_friday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Friday Slot */}
                              {/* Saturday Slot */}
                              <div id="slot_saturday" className="tab-pane fade">
                                <h4 className="card-title d-flex justify-content-between">
                                  <span>Time Slots</span>
                                  <a
                                    className="edit-link"
                                    data-toggle="modal"
                                    href="#add_time_slot"
                                  >
                                    <i className="fa fa-plus-circle" /> Add Slot
                                  </a>
                                </h4>
                                <p className="text-muted mb-0">Not Available</p>
                              </div>
                              {/* /Saturday Slot */}
                            </div>
                            {/* /Schedule Content */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  {/* Add Time Slot Modal */}
  <div className="modal fade custom-modal" id="add_time_slot">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Time Slots</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="hours-info">
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option>12.30 am</option>
                          <option>1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option>12.30 am</option>
                          <option>1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-more mb-3">
              <a href="javascript:void(0);" className="add-hours">
                <i className="fa fa-plus-circle" /> Add More
              </a>
            </div>
            <div className="submit-section text-center">
              <button type="submit" className="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Time Slot Modal */}
  {/* Edit Time Slot Modal */}
  <div className="modal fade custom-modal" id="edit_time_slot">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Time Slots</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="hours-info">
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option selected="">12.00 am</option>
                          <option>12.30 am</option>
                          <option>1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option selected="">12.30 am</option>
                          <option>1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option selected="">12.30 am</option>
                          <option>1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option>12.30 am</option>
                          <option selected="">1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                  <a href="#" className="btn btn-danger trash">
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
              </div>
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  <div className="row form-row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option>12.30 am</option>
                          <option selected="">1.00 am</option>
                          <option>1.30 am</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <select className="form-control">
                          <option>-</option>
                          <option>12.00 am</option>
                          <option>12.30 am</option>
                          <option>1.00 am</option>
                          <option selected="">1.30 am</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                  <a href="#" className="btn btn-danger trash">
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
              </div>
            </div>
            <div className="add-more mb-3">
              <a href="javascript:void(0);" className="add-hours">
                <i className="fa fa-plus-circle" /> Add More
              </a>
            </div>
            <div className="submit-section text-center">
              <button type="submit" className="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Time Slot Modal */}
</>

    )
}

export default ScheduleTimings;