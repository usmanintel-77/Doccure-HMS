import React from "react";

const PatientProfile =() => {
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
                <li>
                  <a href="ScheduleTimings">Schedule Timing</a>
                </li>
                <li>
                  <a href="MyPatients">Patients List</a>
                </li>
                <li className="active">
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
                  <a href="Booking">Register</a>
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
                  Profile
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Profile</h2>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
            {/* Profile Widget */}
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0016
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt" /> Newyork,
                          United States
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 952 001 8563</span>
                    </li>
                    <li>
                      Age <span>38 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>AB+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Profile Widget */}
            {/* Last Booking */}
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Last Booking</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="media align-items-center">
                    <div className="mr-3">
                      <img
                        alt="Image placeholder"
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        className="avatar  rounded-circle"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                      <span className="d-block text-sm text-muted">
                        Dentist
                      </span>
                      <span className="d-block text-sm text-muted">
                        14 Nov 2019 5.00 PM
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media align-items-center">
                    <div className="mr-3">
                      <img
                        alt="Image placeholder"
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        className="avatar  rounded-circle"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                      <span className="d-block text-sm text-muted">
                        Dentist
                      </span>
                      <span className="d-block text-sm text-muted">
                        12 Nov 2019 11.00 AM
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* /Last Booking */}
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
            <div className="card">
              <div className="card-body pt-0">
                <div className="user-tabs">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#pat_appointments"
                        data-toggle="tab"
                      >
                        Appointments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pres" data-toggle="tab">
                        <span>Prescription</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#medical" data-toggle="tab">
                        <span className="med-records">Medical Records</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#billing" data-toggle="tab">
                        <span>Billing</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  {/* Appointment Tab */}
                  <div
                    id="pat_appointments"
                    className="tab-pane fade show active"
                  >
                    <div className="card card-table mb-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Doctor</th>
                                <th>Appt Date</th>
                                <th>Booking Date</th>
                                <th>Amount</th>
                                <th>Follow Up</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    10.00 AM
                                  </span>
                                </td>
                                <td>12 Nov 2019</td>
                                <td>$160</td>
                                <td>16 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-success-light">
                                    Confirm
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  12 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    8.00 PM
                                  </span>
                                </td>
                                <td>12 Nov 2019</td>
                                <td>$250</td>
                                <td>14 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-success-light">
                                    Confirm
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  11 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    11.00 AM
                                  </span>
                                </td>
                                <td>10 Nov 2019</td>
                                <td>$400</td>
                                <td>13 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-danger-light">
                                    Cancelled
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  10 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    3.00 PM
                                  </span>
                                </td>
                                <td>10 Nov 2019</td>
                                <td>$350</td>
                                <td>12 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-warning-light">
                                    Pending
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="EditPrescription"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="far fa-trash-alt" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  9 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    7.00 PM
                                  </span>
                                </td>
                                <td>8 Nov 2019</td>
                                <td>$75</td>
                                <td>11 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-success-light">
                                    Confirm
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  8 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    9.00 AM
                                  </span>
                                </td>
                                <td>6 Nov 2019</td>
                                <td>$175</td>
                                <td>10 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-danger-light">
                                    Cancelled
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  8 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    6.00 PM
                                  </span>
                                </td>
                                <td>6 Nov 2019</td>
                                <td>$450</td>
                                <td>10 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-success-light">
                                    Confirm
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  7 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    9.00 PM
                                  </span>
                                </td>
                                <td>7 Nov 2019</td>
                                <td>$275</td>
                                <td>9 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-info-light">
                                    Completed
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="far fa-clock" /> Reschedule
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  6 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    8.00 PM
                                  </span>
                                </td>
                                <td>4 Nov 2019</td>
                                <td>$600</td>
                                <td>8 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-info-light">
                                    Completed
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="far fa-clock" /> Reschedule
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  5 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    5.00 PM
                                  </span>
                                </td>
                                <td>1 Nov 2019</td>
                                <td>$100</td>
                                <td>7 Nov 2019</td>
                                <td>
                                  <span className="badge badge-pill bg-info-light">
                                    Completed
                                  </span>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="far fa-clock" /> Reschedule
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Appointment Tab */}
                  {/* Prescription Tab */}
                  <div className="tab-pane fade" id="pres">
                    <div className="text-right">
                      <a href="AddPrescription" className="add-new-btn">
                        Add Prescription
                      </a>
                    </div>
                    <div className="card card-table mb-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Date </th>
                                <th>Name</th>
                                <th>Created by </th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>14 Nov 2019</td>
                                <td>Prescription 1</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-01.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Ruby Perrin <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>13 Nov 2019</td>
                                <td>Prescription 2</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="EditPrescription"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-edit" /> Edit
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="far fa-trash-alt" /> Delete
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>12 Nov 2019</td>
                                <td>Prescription 3</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-03.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Deborah Angel <span>Cardiology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>11 Nov 2019</td>
                                <td>Prescription 4</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-04.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Sofia Brient <span>Urology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>10 Nov 2019</td>
                                <td>Prescription 5</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-05.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Marvin Campbell <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>9 Nov 2019</td>
                                <td>Prescription 6</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-06.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Katharine Berthold{" "}
                                      <span>Orthopaedics</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>8 Nov 2019</td>
                                <td>Prescription 7</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-07.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Linda Tobin <span>Neurology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>7 Nov 2019</td>
                                <td>Prescription 8</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-08.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Paul Richard <span>Dermatology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>6 Nov 2019</td>
                                <td>Prescription 9</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-09.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. John Gibbs <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>5 Nov 2019</td>
                                <td>Prescription 10</td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-10.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Olga Barlow <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Prescription Tab */}
                  {/* Medical Records Tab */}
                  <div className="tab-pane fade" id="medical">
                    <div className="text-right">
                      <a
                        href="#"
                        className="add-new-btn"
                        data-toggle="modal"
                        data-target="#add_medical_records"
                      >
                        Add Medical Records
                      </a>
                    </div>
                    <div className="card card-table mb-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Date </th>
                                <th>Description</th>
                                <th>Attachment</th>
                                <th>Created</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0010</a>
                                </td>
                                <td>14 Nov 2019</td>
                                <td>Dental Filling</td>
                                <td>
                                  <a href="#">dental-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-01.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Ruby Perrin <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0009</a>
                                </td>
                                <td>13 Nov 2019</td>
                                <td>Teeth Cleaning</td>
                                <td>
                                  <a href="#">dental-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="EditPrescription"
                                      className="btn btn-sm bg-success-light"
                                      data-toggle="modal"
                                      data-target="#add_medical_records"
                                    >
                                      <i className="fas fa-edit" /> Edit
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="far fa-trash-alt" /> Delete
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0008</a>
                                </td>
                                <td>12 Nov 2019</td>
                                <td>General Checkup</td>
                                <td>
                                  <a href="#">cardio-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-03.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Deborah Angel <span>Cardiology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0007</a>
                                </td>
                                <td>11 Nov 2019</td>
                                <td>General Test</td>
                                <td>
                                  <a href="#">general-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-04.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Sofia Brient <span>Urology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0006</a>
                                </td>
                                <td>10 Nov 2019</td>
                                <td>Eye Test</td>
                                <td>
                                  <a href="#">eye-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-05.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Marvin Campbell{" "}
                                      <span>Ophthalmology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0005</a>
                                </td>
                                <td>9 Nov 2019</td>
                                <td>Leg Pain</td>
                                <td>
                                  <a href="#">ortho-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-06.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Katharine Berthold{" "}
                                      <span>Orthopaedics</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0004</a>
                                </td>
                                <td>8 Nov 2019</td>
                                <td>Head pain</td>
                                <td>
                                  <a href="#">neuro-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-07.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Linda Tobin <span>Neurology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0003</a>
                                </td>
                                <td>7 Nov 2019</td>
                                <td>Skin Alergy</td>
                                <td>
                                  <a href="#">alergy-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-08.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Paul Richard <span>Dermatology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0002</a>
                                </td>
                                <td>6 Nov 2019</td>
                                <td>Dental Removing</td>
                                <td>
                                  <a href="#">dental-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-09.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. John Gibbs <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="javascript:void(0);">#MR-0001</a>
                                </td>
                                <td>5 Nov 2019</td>
                                <td>Dental Filling</td>
                                <td>
                                  <a href="#">dental-test.pdf</a>
                                </td>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-10.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Olga Barlow <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Medical Records Tab */}
                  {/* Billing Tab */}
                  <div className="tab-pane" id="billing">
                    <div className="text-right">
                      <a className="add-new-btn" href="AddBilling">
                        Add Billing
                      </a>
                    </div>
                    <div className="card card-table mb-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Invoice No</th>
                                <th>Doctor</th>
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-01.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Ruby Perrin <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$450</td>
                                <td>14 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-02.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Darren Elder <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$300</td>
                                <td>13 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="EditBilling"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-edit" /> Edit
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="far fa-trash-alt" /> Delete
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-03.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Deborah Angel <span>Cardiology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$150</td>
                                <td>12 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-04.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Sofia Brient <span>Urology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$50</td>
                                <td>11 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-05.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Marvin Campbell{" "}
                                      <span>Ophthalmology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$600</td>
                                <td>10 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-06.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Katharine Berthold{" "}
                                      <span>Orthopaedics</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$200</td>
                                <td>9 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-07.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Linda Tobin <span>Neurology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$100</td>
                                <td>8 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-08.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Paul Richard <span>Dermatology</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$250</td>
                                <td>7 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-09.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. John Gibbs <span>Dental</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$175</td>
                                <td>6 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
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
                                      href="DoctorProfile"
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/doctors/doctor-thumb-10.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="DoctorProfile">
                                      Dr. Olga Barlow <span>#0010</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>$550</td>
                                <td>5 Nov 2019</td>
                                <td className="text-right">
                                  <div className="table-action">
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-primary-light"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Billing Tab */}
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
                    <a href="Booking">
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
  {/* Add Medical Records Modal */}
  <div className="modal fade custom-modal" id="add_medical_records">
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Medical Records</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form>
          <div className="modal-body">
            <div className="form-group">
              <label>Date</label>
              <input
                type="text"
                className="form-control datetimepicker"
                defaultValue="31-10-2019"
              />
            </div>
            <div className="form-group">
              <label>Description ( Optional )</label>
              <textarea className="form-control" defaultValue={""} />
            </div>
            <div className="form-group">
              <label>Upload File</label>
              <input type="file" className="form-control" />
            </div>
            <div className="submit-section text-center">
              <button type="submit" className="btn btn-primary submit-btn">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary submit-btn"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Medical Records Modal */}
</>

    )
}
export default PatientProfile;