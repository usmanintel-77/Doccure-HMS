import React from "react";


const Checkout =() =>{
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
                            <li className="active"><a href="Checkout">Checkout</a></li>
                            <li><a href="BookingSuccess">Booking Success</a></li>
                            <li><a href="PatientDashboard">Patient Dashboard</a></li>
                            <li><a href="Favourites">Favourites</a></li>
                            <li><a href="Chat">Chat</a></li>
                            <li><a href="ProfileSettings">Profile Settings</a></li>
                            <li><a href="ChangePassword">Change Password</a></li>
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
                <li className="nav-item">
                    <a className="nav-link header-login" href="Login">login / Signup </a>
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
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                    <h2 className="breadcrumb-title">Checkout</h2>
                </div>
            </div>
        </div>
    </div>

    <div className="content">
        <div className="container">

            <div className="row">
                <div className="col-md-7 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                        
                            <form action="https://dreamguys.co.in/demo/doccure/BookingSuccess">
                            
                                <div className="info-widget">
                                    <h4 className="card-title">Personal Information</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group card-label">
                                                <label>First Name</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group card-label">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group card-label">
                                                <label>Email</label>
                                                <input className="form-control" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group card-label">
                                                <label>Phone</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="exist-customer">Existing Customer? <a href="#">Click here to login</a></div>
                                </div>
                                
                                <div className="payment-widget">
                                    <h4 className="card-title">Payment Method</h4>
                                    
                                    <div className="payment-list">
                                        <label className="payment-radio credit-card-option">
                                            <input type="radio" name="radio" checked />
                                            <span className="checkmark"></span>
                                            Credit card
                                        </label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group card-label">
                                                    <label for="card_name">Name on Card</label>
                                                    <input className="form-control" id="card_name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group card-label">
                                                    <label for="card_number">Card Number</label>
                                                    <input className="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group card-label">
                                                    <label for="expiry_month">Expiry Month</label>
                                                    <input className="form-control" id="expiry_month" placeholder="MM" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group card-label">
                                                    <label for="expiry_year">Expiry Year</label>
                                                    <input className="form-control" id="expiry_year" placeholder="YY" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group card-label">
                                                    <label for="cvv">CVV</label>
                                                    <input className="form-control" id="cvv" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="payment-list">
                                        <label className="payment-radio paypal-option">
                                            <input type="radio" name="radio" />
                                            <span className="checkmark"></span>
                                            Paypal
                                        </label>
                                    </div>
                                    
                                    <div className="terms-accept">
                                        <div className="custom-checkbox">
                                           <input type="checkbox" id="terms_accept" />
                                           <label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
                                        </div>
                                    </div>
                                    
                                    <div className="submit-section mt-4">
                                        <button type="submit" className="btn btn-primary submit-btn">Confirm and Pay</button>
                                    </div>
                                    
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-md-5 col-lg-4 theiaStickySidebar">
                
                    <div className="card booking-card">
                        <div className="card-header">
                            <h4 className="card-title">Booking Summary</h4>
                        </div>
                        <div className="card-body">
                        
                            <div className="booking-doc-info">
                                <a href="DoctorProfile" className="booking-doc-img">
                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                </a>
                                <div className="booking-info">
                                    <h4><a href="DoctorProfile">Dr. Darren Elder</a></h4>
                                    <div className="rating">
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star"></i>
                                        <span className="d-inline-block average-rating">35</span>
                                    </div>
                                    <div className="clinic-details">
                                        <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="booking-summary">
                                <div className="booking-item-wrap">
                                    <ul className="booking-date">
                                        <li>Date <span>16 Nov 2019</span></li>
                                        <li>Time <span>10:00 AM</span></li>
                                    </ul>
                                    <ul className="booking-fee">
                                        <li>Consulting Fee <span>$100</span></li>
                                        <li>Booking Fee <span>$10</span></li>
                                        <li>Video Call <span>$50</span></li>
                                    </ul>
                                    <div className="booking-total">
                                        <ul className="booking-total-list">
                                            <li>
                                                <span>Total</span>
                                                <span className="total-cost">$160</span>
                                            </li>
                                        </ul>
                                    </div>
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

export default Checkout;