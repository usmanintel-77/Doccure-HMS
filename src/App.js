import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import AddBilling from './components/Pages/AddBilling';
import AddPrescription from './components/Pages/AddPrescription';
import Appointments from './components/Pages/Appointments';
import BlankPage from './components/Pages/BlankPage';
import BookingSuccess from './components/Pages/BookingSuccess'; 
import Booking from './components/Pages/Booking'; 
import Calendar from './components/Pages/Calendar'; 
import ChangePassword from './components/Pages/ChangePassword'; 
import ChatDoctor from './components/Pages/ChatDoctor';  
import Chat from './components/Pages/Chat';  
import Checkout from './components/Pages/Checkout'; 
import Components from './components/Pages/Components'; 
import DoctorChangePassword from './components/Pages/DoctorChangePassword'; 
import DoctorDashboard from './components/Pages/DoctorDashboard'; 
import DoctorProfileSettings from './components/Pages/DoctorProfileSettings'; 
import DoctorProfile from './components/Pages/DoctorProfile'; 
import DoctorRegister from './components/Pages/DoctorRegister';
import EditBilling from './components/Pages/EditBilling';
import EditPrescription from './components/Pages/EditPrescription';
import Favourites from './components/Pages/Favourites';
import ForgotPassword from './components/Pages/ForgotPassword';
import Invoices from './components/Pages/Invoices';
import InvoiceView from './components/Pages/InvoiceView';
import Login from './components/Pages/Login';
import MyPatients from './components/Pages/MyPatients';
import PatientDashboard from './components/Pages/PatientDashboard';
import PatientProfile from './components/Pages/PatientProfile';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import ProfileSettings from './components/Pages/ProfileSettings';
import Register from './components/Pages/Register';
import Reviews from './components/Pages/Reviews';
import ScheduleTimings from './components/Pages/ScheduleTimings';
import Search from './components/Pages/Search';
import SocialMedia from './components/Pages/SocialMedia';
import TermCondition from './components/Pages/Term&Condition';
import VideoCall from './components/Pages/VideoCall';
import VoiceCall from './components/Pages/VoiceCall';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddBilling" element={<AddBilling />} />
          <Route path="/AddPrescription" element={<AddPrescription />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/BlankPage" element={<BlankPage />} />
          <Route path="/BookingSuccess" element={<BookingSuccess />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ChatDoctor" element={<ChatDoctor />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/DoctorChangePassword" element={<DoctorChangePassword />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/DoctorProfileSettings" element={<DoctorProfileSettings />} />
          <Route path="/DoctorProfile" element={<DoctorProfile />} />
          <Route path="/DoctorRegister" element={<DoctorRegister />} />
          <Route path="/EditBilling" element={<EditBilling />} />
          <Route path="/EditPrescription" element={<EditPrescription />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/InvoiceView" element={<InvoiceView />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyPatients" element={<MyPatients />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/PatientProfile" element={<PatientProfile />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/ProfileSettings" element={<ProfileSettings />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/ScheduleTimings" element={<ScheduleTimings />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
          <Route path="/Term&Condition" element={<TermCondition />} />
          <Route path="/VideoCall" element={<VideoCall />} />
          <Route path="/VoiceCall" element={<VoiceCall />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
