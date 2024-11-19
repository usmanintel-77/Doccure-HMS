import React from "react";


const Appointments = () =>{
    return(
        <>

<div class="main-wrapper">

    <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <a href="Home" class="navbar-brand logo">
                    <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
                </a>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="Home" class="menu-logo">
                        <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
                    </a>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <li>
                        <a href="/ ">Home</a>
                    </li>
                    <li class="has-submenu active">
                        <a href="#">Doctors <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="DoctorDashboard">Doctor Dashboard</a></li>
                            <li class="active"><a href="Appointments">Appointments</a></li>
                            <li><a href="ScheduleTimings">Schedule Timing</a></li>
                            <li><a href="MyPatients">Patients List</a></li>
                            <li><a href="PatientProfile">Patients Profile</a></li>
                            <li><a href="ChatDoctor">Chat</a></li>
                            <li><a href="Invoices">Invoices</a></li>
                            <li><a href="DoctorProfileSettings">Profile Settings</a></li>
                            <li><a href="Reviews">Reviews</a></li>
                            <li><a href="DoctorRegister">Doctor Register</a></li>
                        </ul>
                    </li>	
                    <li class="has-submenu">
                        <a href="#">Patients <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="Search">Search Doctor</a></li>
                            <li><a href="DoctorProfile">Doctor Profile</a></li>
                            <li><a href="Booking">Booking</a></li>
                            <li><a href="Checkout">Checkout</a></li>
                            <li><a href="BookingSuccess">Booking Success</a></li>
                            <li><a href="PatientDashboard">Patient Dashboard</a></li>
                            <li><a href="Favourites">Favourites</a></li>
                            <li><a href="Chat">Chat</a></li>
                            <li><a href="ProfileSettings">Profile Settings</a></li>
                            <li><a href="ChangePassword">Change Password</a></li>
                        </ul>
                    </li>	
                    <li class="has-submenu">
                        <a href="#">Pages <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="VoiceCall">Voice Call</a></li>
                            <li><a href="VideoCall">Video Call</a></li>
                            <li><a href="Search">Search Doctors</a></li>
                            <li><a href="Calendar">Calendar</a></li>
                            <li><a href="Components">Components</a></li>
                            <li class="has-submenu">
                                <a href="Invoices">Invoices</a>
                                <ul class="submenu">
                                    <li><a href="Invoices">Invoices</a></li>
                                    <li><a href="InvoiceView">Invoice View</a></li>
                                </ul>
                            </li>
                            <li><a href="BlankPage">Starter Page</a></li>
                            <li><a href="Login">Login</a></li>
                            <li><a href="Register">Register</a></li>
                            <li><a href="ForgotPassword">Forgot Password</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="admin/index.html" target="_blank">Admin</a>
                    </li>
                    <li class="login-link">
                        <a href="Login">Login / Signup</a>
                    </li>
                </ul>
            </div>		 
            <ul class="nav header-navbar-rht">
                <li class="nav-item contact-item">
                    <div class="header-contact-img">
                        <i class="far fa-hospital"></i>							
                    </div>
                    <div class="header-contact-detail">
                        <p class="contact-header">Contact</p>
                        <p class="contact-info-header"> +1 315 369 5943</p>
                    </div>
                </li>
                
                <li class="nav-item dropdown has-arrow logged-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span class="user-img">
                            <img class="rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" width="31" alt="Darren Elder"/>
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <div class="user-header">
                            <div class="avatar avatar-sm">
                                <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" class="avatar-img rounded-circle"/>
                            </div>
                            <div class="user-text">
                                <h6>Darren Elder</h6>
                                <p class="text-muted mb-0">Doctor</p>
                            </div>
                        </div>
                        <a class="dropdown-item" href="DoctorDashboard">Dashboard</a>
                        <a class="dropdown-item" href="DoctorProfileSettings">Profile Settings</a>
                        <a class="dropdown-item" href="Login">Logout</a>
                    </div>
                </li>
                
            </ul>
        </nav>
    </header>
    
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="Home">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Appointments</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Appointments</h2>
                </div>
            </div>
        </div>
    </div>
    
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                
                
                    <div class="profile-sidebar">
                        <div class="widget-profile pro-widget-content">
                            <div class="profile-info-widget">
                                <a href="#" class="booking-doc-img">
                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3>Dr. Darren Elder</h3>
                                    
                                    <div class="patient-details">
                                        <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-widget">
                            <nav class="dashboard-menu">
                                <ul>
                                    <li>
                                        <a href="DoctorDashboard">
                                            <i class="fas fa-columns"></i>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li class="active">
                                        <a href="Appointments">
                                            <i class="fas fa-calendar-check"></i>
                                            <span>Appointments</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="MyPatients">
                                            <i class="fas fa-user-injured"></i>
                                            <span>My Patients</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ScheduleTimings">
                                            <i class="fas fa-hourglass-start"></i>
                                            <span>Schedule Timings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Invoices">
                                            <i class="fas fa-file-invoice"></i>
                                            <span>Invoices</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Reviews">
                                            <i class="fas fa-star"></i>
                                            <span>Reviews</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ChatDoctor">
                                            <i class="fas fa-comments"></i>
                                            <span>Message</span>
                                            <small class="unread-msg">23</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="DoctorProfileSettings">
                                            <i class="fas fa-user-cog"></i>
                                            <span>Profile Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="SocialMedia">
                                            <i class="fas fa-share-alt"></i>
                                            <span>Social Media</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="DoctorChangePassword">
                                            <i class="fas fa-lock"></i>
                                            <span>Change Password</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Home">
                                            <i class="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </div>
                
                <div class="col-md-7 col-lg-8 col-xl-9">
                    <div class="appointments">
                    
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Richard Wilson</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 14 Nov 2019, 10.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> richard@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 923 782 4575</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient1.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Charlene Reed </a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 12 Nov 2019, 5.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> North Carolina, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> charlenereed@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 828 632 9170</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient2.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Travis Trimble</a></h3>
                                    
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 11 Nov 2019, 8.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Maine, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> travistrimble@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 207 729 9974</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>

                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient3.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Carl Kelly</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 9 Nov 2019, 9.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> carlkelly@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 260 724 7769</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>

                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient4.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Michelle Fairfax</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 9 Nov 2019, 1.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Indiana, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> michellefairfax@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 504 368 6874</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>

                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient5.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Gina Moore</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 8 Nov 2019, 3.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> ginamoore@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 954 820 7887</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>

                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient6.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Elsie Gilley</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 6 Nov 2019, 9.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Kentucky, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> elsiegilley@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 315 384 4562</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient7.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Joan Gardner</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 5 Nov 2019, 12.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> joangardner@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 707 2202 603</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>

                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient8.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Daniel Griffing</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 5 Nov 2019, 7.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> New Jersey, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> danielgriffing@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 973 773 9497</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient9.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Walter Roberson</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 4 Nov 2019, 10.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> walterroberson@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 850 358 4445</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient10.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Robert Rhodes</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 4 Nov 2019, 11.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> robertrhodes@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 858 259 5285</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>

                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <a href="PatientProfile" class="booking-doc-img">
                                    <img src="assets/img/patients/patient11.jpg" alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="PatientProfile">Harry Williams</a></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 3 Nov 2019, 6.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Colorado, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> harrywilliams@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 303 607 7075</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>		

    <footer class="footer">
        
        <div class="footer-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                    
                        <div class="footer-widget footer-about">
                            <div class="footer-logo">
                                <img src="assets/img/footer-logo.png" alt="logo"/>
                            </div>
                            <div class="footer-about-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div class="social-icon">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i class="fab fa-dribbble"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                    
                        
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">For Patients</h2>
                            <ul>
                                <li><a href="Search"><i class="fas fa-angle-double-right"></i> Search for Doctors</a></li>
                                <li><a href="Login"><i class="fas fa-angle-double-right"></i> Login</a></li>
                                <li><a href="Register"><i class="fas fa-angle-double-right"></i> Register</a></li>
                                <li><a href="Booking"><i class="fas fa-angle-double-right"></i> Booking</a></li>
                                <li><a href="PatientDashboard"><i class="fas fa-angle-double-right"></i> Patient Dashboard</a></li>
                            </ul>
                        </div>
                        
                        
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                    
                        
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">For Doctors</h2>
                            <ul>
                                <li><a href="Appointments"><i class="fas fa-angle-double-right"></i> Appointments</a></li>
                                <li><a href="Chat"><i class="fas fa-angle-double-right"></i> Chat</a></li>
                                <li><a href="Login"><i class="fas fa-angle-double-right"></i> Login</a></li>
                                <li><a href="DoctorRegister"><i class="fas fa-angle-double-right"></i> Register</a></li>
                                <li><a href="DoctorDashboard"><i class="fas fa-angle-double-right"></i> Doctor Dashboard</a></li>
                            </ul>
                        </div>
                        
                        
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                    

                        <div class="footer-widget footer-contact">
                            <h2 class="footer-title">Contact Us</h2>
                            <div class="footer-contact-info">
                                <div class="footer-address">
                                    <span><i class="fas fa-map-marker-alt"></i></span>
                                    <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                                </div>
                                <p>
                                    <i class="fas fa-phone-alt"></i>
                                    +1 315 369 5943
                                </p>
                                <p class="mb-0">
                                    <i class="fas fa-envelope"></i>
                                    doccure@example.com
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container-fluid">
            
                
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="copyright-text">
                                <p class="mb-0"><a href="templateshub.net">Templates Hub</a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                        
                            
                            <div class="copyright-menu">
                                <ul class="policy-menu">
                                    <li><a href="Term&Condition">Terms and Conditions</a></li>
                                    <li><a href="PrivacyPolicy">Policy</a></li>
                                </ul>
                            </div>
                                                      
                        </div>
                    </div>
                </div>
                                
            </div>
        </div>
        
        
    </footer>
    
   
</div>


<div class="modal fade custom-modal" id="appt_details">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Appointment Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <ul class="info-details">
                    <li>
                        <div class="details-header">
                            <div class="row">
                                <div class="col-md-6">
                                    <span class="title">#APT0001</span>
                                    <span class="text">21 Oct 2019 10:00 AM</span>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-right">
                                        <button type="button" class="btn bg-success-light btn-sm" id="topup_status">Completed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="title">Status:</span>
                        <span class="text">Completed</span>
                    </li>
                    <li>
                        <span class="title">Confirm Date:</span>
                        <span class="text">29 Jun 2019</span>
                    </li>
                    <li>
                        <span class="title">Paid Amount</span>
                        <span class="text">$450</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


        </>
    )
}

export default Appointments;