import React from "react";

const Favourites = () =>{
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
                  <a href="doctor-ProfileSettings">Profile Settings</a>
                </li>
                <li>
                  <a href="Reviews">Reviews</a>
                </li>
                <li>
                  <a href="DoctorRegister">Doctor Register</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu active">
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
                <li className="active">
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
                  src="assets/img/patients/patient.jpg"
                  width={31}
                  alt="Ryan Taylor"
                />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="assets/img/patients/patient.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Richard Wilson</h6>
                  <p className="text-muted mb-0">Patient</p>
                </div>
              </div>
              <a className="dropdown-item" href="PatientDashboard">
                Dashboard
              </a>
              <a className="dropdown-item" href="ProfileSettings">
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
                  Favourites
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Favourites</h2>
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
            <div className="profile-sidebar">
              <div className="widget-profile pro-widget-content">
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
                        <i className="fas fa-birthday-cake" /> 24 Jul 1983, 38
                        years
                      </h5>
                      <h5 className="mb-0">
                        <i className="fas fa-map-marker-alt" /> Newyork, USA
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-widget">
                <nav className="dashboard-menu">
                  <ul>
                    <li>
                      <a href="PatientDashboard">
                        <i className="fas fa-columns" />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="Favourites">
                        <i className="fas fa-bookmark" />
                        <span>Favourites</span>
                      </a>
                    </li>
                    <li>
                      <a href="Chat">
                        <i className="fas fa-comments" />
                        <span>Message</span>
                        <small className="unread-msg">23</small>
                      </a>
                    </li>
                    <li>
                      <a href="ProfileSettings">
                        <i className="fas fa-user-cog" />
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="ChangePassword">
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
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="row row-grid">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-01.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Ruby Perrin</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MDS - Periodontology and Oral Implantology, BDS
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Florida, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-02.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Darren Elder</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      BDS, MDS - Oral &amp; Maxillofacial Surgery
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (35)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Newyork, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $50 - $300{" "}
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-03.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Deborah Angel</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MD - General Medicine, DNB - Cardiology
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (27)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Georgia, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-04.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Sofia Brient</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MS - General Surgery, MCh - Urology
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">(4)</span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Louisiana, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $150 - $250{" "}
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-05.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Marvin Campbell</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MD - Ophthalmology, DNB - Ophthalmology
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (66)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Michigan, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $50 - $700
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-06.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Katharine Berthold</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (52)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Texas, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $100 - $500
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-07.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Linda Tobin</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MD - General Medicine, DM - Neurology
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (43)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Kansas, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $100 - $1000
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-08.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Paul Richard</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MD - Dermatology , Venereology &amp; Lepros
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (49)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> California, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $100 - $400
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-09.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Dr. John Gibbs</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MDS - Periodontology and Oral Implantology, BDS
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (112)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Oklahoma, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $500 - $2500
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-10.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Dr. Olga Barlow</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MDS - Periodontology and Oral Implantology, BDS
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (65)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Montana, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $75 - $250
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-11.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Dr. Julia Washington</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MD - General Medicine, DM - Endocrinology
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">(5)</span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Oklahoma, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $275 - $450
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="DoctorProfile">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="assets/img/doctors/doctor-12.jpg"
                      />
                    </a>
                    <a href="javascript:void(0)" className="fav-btn">
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="DoctorProfile">Dr. Shaun Aponte</a>
                      <i className="fas fa-check-circle verified" />
                    </h3>
                    <p className="speciality">
                      MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">(5)</span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Indiana, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> Available on Fri, 22 Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> $150 - $350
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        />
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="DoctorProfile" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="Booking" className="btn book-btn">
                          Book Now
                        </a>
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
  
</>

    )
}

export default Favourites;