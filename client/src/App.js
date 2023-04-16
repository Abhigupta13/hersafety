import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import ContactUs from "./Pages/Contact_Us/Contact_Us.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./components/Help/Help";
import Faqs from "./Pages/faqs/Faqs.js";
import LegalResources from "./Pages/legal resources/LegalResources";
import Sexual_Violence_Laws from "./components/Sexual_Violence_Laws/Sexual_Violence_Laws.js";
import FIR_filing from "./components/FIR_filing/FIR_filing.jsx";
import About from "./Pages/about/About.js";
import Form from "./components/incidentForm/Form";
import SafetyTipForm from "./components/safetytipForm/SafetyTipForm";
import Sample from "./components/maphome/Sample";
import View_Data from "./Pages/View_Data/View_Data";
import StateWiseChart from "./components/chart/ViolenceWiseChart";
import AnalyticsPage from "./Pages/AnalyticsPage/AnalyticsPage";
import XYChart from "./components/chart/XYChart";
import TenNgosfighting from "./Pages/ten_ngos_fighting/TenNgosfighting";
import ChatBot from "react-simple-chatbot";
import VideoCallingPage from "./components/VideoCallingPage";
import AppointmentForm from "./Pages/appointment/AppointmentForm";
import AppointmentSubmitted from "./Pages/appointment/AppointmentSubmitted";
import Authentication from "./components/Authentication/Authentication";

// import Chatbot from "./components/Chatbot/Chatbot";
const App = () => {
  const steps = [
    {
      id: "Greet",
      message: "Hello, welcome to our portal",
      trigger: "Done",
    },
    { id: "Done", message: "Please enter your name!", trigger: "waiting1" },
    { id: "waiting1", user: true, trigger: "Name" },
    {
      id: "Name",
      message: "Hi {previousValue}, Share your incident",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "consent", label: "Consent Form", trigger: "sharing" },
        {
          value: "sharing",
          label: "For Whom You are Sharing For?",
          trigger: "gender",
        },
        { value: "gender", label: "Please tell us the gender", trigger: "age" },
        {
          value: "age",
          label: "Please Share the Age of the victim ?",
          trigger: "incident",
        },
        {
          value: "incident",
          label: "Please share Incident Here",
          trigger: "happened",
        },
        {
          value: "happened",
          label: "Can you tell us what happened?",
          trigger: "type",
        },
        {
          value: "type",
          label: "Select type of violence experienced",
          trigger: "police",
        },
        {
          value: "police",
          label: "Have the incident been reported to police?",
          trigger: "location",
        },
        {
          value: "location",
          label: "Please tell us where the incident took place",
          trigger: "End",
        },
      ],
    },
    {
      id: "consent",
      message: "Please give your consent",
      trigger: "End",
    },
    {
      id: "sharing",
      message: "For whom are you sharing this information?",
      trigger: "End",
    },
    {
      id: "gender",
      message: "Please tell us the gender",
      trigger: "End",
    },
    {
      id: "age",
      message: "Please share the age of the victim",
      trigger: "End",
    },
    {
      id: "incident",
      message: "Please share the incident here",
      trigger: "End",
    },
    {
      id: "happened",
      message: "Can you tell us what happened?",
      trigger: "End",
    },
    {
      id: "type",
      message: "Select type of violence experienced",
      trigger: "End",
    },
    {
      id: "police",
      message: "Have the incident been reported to police?",
      trigger: "End",
    },
    {
      id: "location",
      message: "Please tell us where the incident took place",
      trigger: "End",
    },
    {
      id: "End",
      message: "Thank you for your responses.",
      end: true,
    },
  ];

  return (
    <div className="mainapp">
      <div id="content">
        <a href="/chatbot">
          <img
            src="https://helloyubo.com/wp-content/uploads/2022/11/Customer-Support-2.png"
            className="ribbon"
            alt=""
          />
        </a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
          <Route exact path="/help" element={<Help />}></Route>
          <Route exact path="/faqs" element={<Faqs />}></Route>
          <Route exact path="/incidentform" element={<Form />}></Route>
          <Route exact path="/safetytipform" element={<SafetyTipForm />}></Route>
          <Route exact path="/legal_resources" element={<LegalResources />}></Route>
          <Route exact path="/sexual_violence_laws" element={<Sexual_Violence_Laws />}></Route>
          <Route exact path="/filing_of_fir" element={<FIR_filing />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/test" element={<Sample />}></Route>
          <Route exact path="/viewdata" element={<View_Data />}></Route>
          <Route exact path="/statedata" element={<StateWiseChart />}></Route>
          <Route exact path="/Analytics" element={<AnalyticsPage />}></Route>
          <Route exact path="/XYChart" element={<XYChart />}></Route>
          <Route exact path="/TenNgos" element={<TenNgosfighting />}></Route>
          <Route exact path="/video" element={<AppointmentForm/> }></Route>
          <Route exact path="/appointment-submitted" element={<AppointmentSubmitted/> }></Route>
          <Route exact path="/videodemo" element={<VideoCallingPage/> }></Route>
          <Route exact path="/auth" element={<Authentication/> }></Route>

          <Route exact path="/chatbot" element={<ChatBot steps={steps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
