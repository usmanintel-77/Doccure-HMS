import React from "react";


const Search = () => {
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
            <li className="has-submenu active">
              <a href="#">
                Patients <i className="fas fa-chevron-down" />
              </a>
              <ul className="submenu">
                <li className="active">
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
          <li className="nav-item">
            <a className="nav-link header-login" href="Login">
              login / Signup{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* /Header */}
    {/* Breadcrumb */}
    <div className="breadcrumb-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="Home">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Search
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">
              2245 matches found for : Dentist In Bangalore
            </h2>
          </div>
          <div className="col-md-4 col-12 d-md-block d-none">
            <div className="sort-by">
              <span className="sort-title">Sort by</span>
              <span className="sortby-fliter">
                <select className="select">
                  <option>Select</option>
                  <option className="sorting">Rating</option>
                  <option className="sorting">Popular</option>
                  <option className="sorting">Latest</option>
                  <option className="sorting">Free</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
            {/* Search Filter */}
            <div className="card search-filter">
              <div className="card-header">
                <h4 className="card-title mb-0">Search Filter</h4>
              </div>
              <div className="card-body">
                <div className="filter-widget">
                  <div className="cal-icon">
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      placeholder="Select Date"
                    />
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Gender</h4>
                  <div>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="gender_type"
                        defaultChecked=""
                      />
                      <span className="checkmark" /> Male Doctor
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="gender_type" />
                      <span className="checkmark" /> Female Doctor
                    </label>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Select Specialist</h4>
                  <div>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="select_specialist"
                        defaultChecked=""
                      />
                      <span className="checkmark" /> Urology
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="select_specialist"
                        defaultChecked=""
                      />
                      <span className="checkmark" /> Neurology
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" /> Dentist
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" /> Orthopedic
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" /> Cardiologist
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" /> Cardiologist
                    </label>
                  </div>
                </div>
                <div className="btn-search">
                  <button type="button" className="btn btn-block">
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* /Search Filter */}
          </div>
          <div className="col-md-12 col-lg-8 col-xl-9">
            {/* Doctor Widget */}
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <a href="DoctorProfile">
                        <img
                          src="assets/img/doctors/doctor-thumb-01.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <a href="DoctorProfile">Dr. Ruby Perrin</a>
                      </h4>
                      <p className="doc-speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <h5 className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-05.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Dentist
                      </h5>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (17)
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </p>
                        <ul className="clinic-gallery">
                          <li>
                            <a
                              href="assets/img/features/feature-01.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-01.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-02.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-02.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-03.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-03.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-04.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-04.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up" /> 98%
                        </li>
                        <li>
                          <i className="far fa-comment" /> 17 Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="clinic-booking">
                      <a className="view-pro-btn" href="DoctorProfile">
                        View Profile
                      </a>
                      <a className="apt-btn" href="Booking">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Widget */}
            {/* Doctor Widget */}
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <a href="DoctorProfile">
                        <img
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <a href="DoctorProfile">Dr. Darren Elder</a>
                      </h4>
                      <p className="doc-speciality">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </p>
                      <h5 className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-05.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Dentist
                      </h5>
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
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </p>
                        <ul className="clinic-gallery">
                          <li>
                            <a
                              href="assets/img/features/feature-01.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-01.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-02.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-02.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-03.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-03.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-04.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-04.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up" /> 100%
                        </li>
                        <li>
                          <i className="far fa-comment" /> 35 Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
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
                    </div>
                    <div className="clinic-booking">
                      <a className="view-pro-btn" href="DoctorProfile">
                        View Profile
                      </a>
                      <a className="apt-btn" href="Booking">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Widget */}
            {/* Doctor Widget */}
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <a href="DoctorProfile">
                        <img
                          src="assets/img/doctors/doctor-thumb-03.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <a href="DoctorProfile">Dr. Deborah Angel</a>
                      </h4>
                      <p className="doc-speciality">
                        MBBS, MD - General Medicine, DNB - Cardiology
                      </p>
                      <p className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-04.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Cardiology
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
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </p>
                        <ul className="clinic-gallery">
                          <li>
                            <a
                              href="assets/img/features/feature-01.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-01.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-02.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-02.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-03.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-03.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-04.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-04.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up" /> 99%
                        </li>
                        <li>
                          <i className="far fa-comment" /> 35 Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
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
                    </div>
                    <div className="clinic-booking">
                      <a className="view-pro-btn" href="DoctorProfile">
                        View Profile
                      </a>
                      <a className="apt-btn" href="Booking">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Widget */}
            {/* Doctor Widget */}
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <a href="DoctorProfile">
                        <img
                          src="assets/img/doctors/doctor-thumb-04.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <a href="DoctorProfile">Dr. Sofia Brient</a>
                      </h4>
                      <p className="doc-speciality">
                        MBBS, MS - General Surgery, MCh - Urology
                      </p>
                      <p className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-01.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Urology
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (4)
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Louisiana, USA
                        </p>
                        <ul className="clinic-gallery">
                          <li>
                            <a
                              href="assets/img/features/feature-01.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-01.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-02.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-02.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-03.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-03.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-04.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-04.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up" /> 97%
                        </li>
                        <li>
                          <i className="far fa-comment" /> 4 Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
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
                    </div>
                    <div className="clinic-booking">
                      <a className="view-pro-btn" href="DoctorProfile">
                        View Profile
                      </a>
                      <a className="apt-btn" href="Booking">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Widget */}
            {/* Doctor Widget */}
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <a href="DoctorProfile">
                        <img
                          src="assets/img/doctors/doctor-thumb-06.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </a>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <a href="DoctorProfile">Dr. Katharine Berthold</a>
                      </h4>
                      <p className="doc-speciality">
                        MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                      </p>
                      <p className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-03.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Orthopaedics
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
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </p>
                        <ul className="clinic-gallery">
                          <li>
                            <a
                              href="assets/img/features/feature-01.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-01.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-02.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-02.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-03.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-03.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/img/features/feature-04.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="assets/img/features/feature-04.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span> Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up" /> 100%
                        </li>
                        <li>
                          <i className="far fa-comment" /> 52 Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $500{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="clinic-booking">
                      <a className="view-pro-btn" href="DoctorProfile">
                        View Profile
                      </a>
                      <a className="apt-btn" href="Booking">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Widget */}
            <div className="load-more text-center">
              <a className="btn btn-primary btn-sm" href="javascript:void(0);">
                Load More
              </a>
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
export default Search;