import React, { useState } from "react";
import "./AppointmentForm.css";
import { useNavigate } from "react-router-dom";


const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // Submit the form data here
    // ...
    // Navigate to the "Appointment Submitted" page
    navigate('/appointment-submitted');
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Submit the form data here
    // ...
    // Navigate to the "Appointment Submitted" page
    navigate('/videodemo');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Date: ", date);
    console.log("Time: ", time);
  };

  return (
    <div className="appointment-form-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Book an Appointment</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit1}>Book Appointment</button>
        <button style={{marginTop:"3%"}} type="submit" onClick={handleSubmit2}>Video call demo</button>
      </form>
      
    </div>
  );
};

export default AppointmentForm;
