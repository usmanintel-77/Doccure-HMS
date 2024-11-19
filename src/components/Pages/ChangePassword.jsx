import React from "react";


const ChangePassword =() =>{
    return (
        <>
<div className="main-wrapper">

    <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
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
                    <a id="menu_close" className="menu-close" href="javascript:void(0);">
                        <i className="fas fa-times"></i>
                    </a>
                </div>
                <ul className="main-nav">
                    <li>
                        <a href="/ ">Home</a>
                    </li>
                    <li className="has-submenu">
                        <a href="#">Doctors <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu">
                            <li><a href="DoctorDashboard">Doctor Dashboard</a></li>
                            <li><a href="Appointments">Appointments</a></li>
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
                    <li className="has-submenu active">
                        <a href="#">Patients <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu">
                            <li><a href="Search">Search Doctor</a></li>
                            <li><a href="DoctorProfile">Doctor Profile</a></li>
                            <li><a href="Booking">Booking</a></li>
                            <li><a href="Checkout">Checkout</a></li>
                            <li><a href="BookingSuccess">Booking Success</a></li>
                            <li><a href="PatientDashboard">Patient Dashboard</a></li>
                            <li><a href="Favourites">Favourites</a></li>
                            <li><a href="Chat">Chat</a></li>
                            <li><a href="ProfileSettings">Profile Settings</a></li>
                            <li className="active"><a href="ChangePassword">Change Password</a></li>
                        </ul>
                    </li>	
                    <li className="has-submenu">
                        <a href="#">Pages <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu">
                            <li><a href="VoiceCall">Voice Call</a></li>
                            <li><a href="VideoCall">Video Call</a></li>
                            <li><a href="Search">Search Doctors</a></li>
                            <li><a href="Calendar">Calendar</a></li>
                            <li><a href="Components">Components</a></li>
                            <li className="has-submenu">
                                <a href="Invoices">Invoices</a>
                                <ul className="submenu">
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
                    <li className="login-link">
                        <a href="Login">Login / Signup</a>
                    </li>
                </ul>	 
            </div>		 
            <ul className="nav header-navbar-rht">
                <li className="nav-item contact-item">
                    <div className="header-contact-img">
                        <i className="far fa-hospital"></i>							
                    </div>
                    <div className="header-contact-detail">
                        <p className="contact-header">Contact</p>
                        <p className="contact-info-header"> +1 315 369 5943</p>
                    </div>
                </li>
                
                <li className="nav-item dropdown has-arrow logged-item">
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span className="user-img">
                            <img className="rounded-circle" src="assets/img/patients/patient.jpg" width="31" alt="Ryan Taylor" />
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="user-header">
                            <div className="avatar avatar-sm">
                                <img src="assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="user-text">
                                <h6>Richard Wilson</h6>
                                <p className="text-muted mb-0">Patient</p>
                            </div>
                        </div>
                        <a className="dropdown-item" href="PatientDashboard">Dashboard</a>
                        <a className="dropdown-item" href="ProfileSettings">Profile Settings</a>
                        <a className="dropdown-item" href="Login">Logout</a>
                    </div>
                </li>
                
                
            </ul>
        </nav>
    </header>

    <div className="breadcrumb-bar">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-12 col-12">
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="Home">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                        </ol>
                    </nav>
                    <h2 className="breadcrumb-title">Change Password</h2>
                </div>
            </div>
        </div>
    </div>
    
    <div className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                
                    <div className="profile-sidebar">
                        <div className="widget-profile pro-widget-content">
                            <div className="profile-info-widget">
                                <a href="#" className="booking-doc-img">
                                    <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                </a>
                                <div className="profile-det-info">
                                    <h3>Richard Wilson</h3>
                                    <div className="patient-details">
                                        <h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                        <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-widget">
                            <nav className="dashboard-menu">
                                <ul>
                                    <li>
                                        <a href="PatientDashboard">
                                            <i className="fas fa-columns"></i>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Favourites">
                                            <i className="fas fa-bookmark"></i>
                                            <span>Favourites</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Chat">
                                            <i className="fas fa-comments"></i>
                                            <span>Message</span>
                                            <small className="unread-msg">23</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ProfileSettings">
                                            <i className="fas fa-user-cog"></i>
                                            <span>Profile Settings</span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="ChangePassword">
                                            <i className="fas fa-lock"></i>
                                            <span>Change Password</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Home">
                                            <i className="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    
                </div>
                
                <div className="col-md-7 col-lg-8 col-xl-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                
                                    <form>
                                        <div className="form-group">
                                            <label>Old Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>New Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input type="password" className="form-control"/>
                                        </div>
                                        <div className="submit-section">
                                            <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>		
    
    <footer className="footer">
        
        <div className="footer-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                    
                        <div className="footer-widget footer-about">
                            <div className="footer-logo">
                                <img src="assets/img/footer-logo.png" alt="logo" />
                            </div>
                            <div className="footer-about-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="fab fa-dribbble"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                    
                        <div className="footer-widget footer-menu">
                            <h2 className="footer-title">For Patients</h2>
                            <ul>
                                <li><a href="Search"><i className="fas fa-angle-double-right"></i> Search for Doctors</a></li>
                                <li><a href="Login"><i className="fas fa-angle-double-right"></i> Login</a></li>
                                <li><a href="Register"><i className="fas fa-angle-double-right"></i> Register</a></li>
                                <li><a href="Booking"><i className="fas fa-angle-double-right"></i> Booking</a></li>
                                <li><a href="PatientDashboard"><i className="fas fa-angle-double-right"></i> Patient Dashboard</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                    
                        <div className="footer-widget footer-menu">
                            <h2 className="footer-title">For Doctors</h2>
                            <ul>
                                <li><a href="Appointments"><i className="fas fa-angle-double-right"></i> Appointments</a></li>
                                <li><a href="Chat"><i className="fas fa-angle-double-right"></i> Chat</a></li>
                                <li><a href="Login"><i className="fas fa-angle-double-right"></i> Login</a></li>
                                <li><a href="DoctorRegister"><i className="fas fa-angle-double-right"></i> Register</a></li>
                                <li><a href="DoctorDashboard"><i className="fas fa-angle-double-right"></i> Doctor Dashboard</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                    
                        <div className="footer-widget footer-contact">
                            <h2 className="footer-title">Contact Us</h2>
                            <div className="footer-contact-info">
                                <div className="footer-address">
                                    <span><i className="fas fa-map-marker-alt"></i></span>
                                    <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                                </div>
                                <p>
                                    <i className="fas fa-phone-alt"></i>
                                    +1 315 369 5943
                                </p>
                                <p className="mb-0">
                                    <i className="fas fa-envelope"></i>
                                    doccure@example.com
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="container-fluid">
            
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-text">
                                <p className="mb-0"><a href="templateshub.net">Templates Hub</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                        
                            <div className="copyright-menu">
                                <ul className="policy-menu">
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

        </>
    )
}
export default ChangePassword;