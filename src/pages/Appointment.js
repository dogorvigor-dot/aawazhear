import React, { useState } from "react";
import axios from "axios";
import "../styles/Appointment.css"; // IMPORTANT: include CSS file

export default function Appointments() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await axios.post("http://localhost:5000/api/appointments", formData);
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2 className="title">Book an Appointment</h2>
        <p className="subtitle">
          Fill out the form and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Hearing Test">Hearing Test</option>
              <option value="Speech Therapy">Speech Therapy</option>
              <option value="Hearing Aid Fitting">Hearing Aid Fitting</option>
            </select>
          </div>

          <input
            type="date"
            name="date"
            className="full-input"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="full-input"
            placeholder="Additional Message (optional)"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit Appointment
          </button>
        </form>

        {status === "success" && (
          <p className="success-msg">✔ Appointment request sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-msg">✖ Something went wrong. Try again.</p>
        )}
        {status === "Submitting..." && (
          <p className="loading-msg">⏳ Submitting...</p>
        )}
      </div>
    </div>
  );
}
