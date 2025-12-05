// src/pages/Contact.js
import "../styles/contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero / Banner */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="contact-hero-subtitle">
            Providing Better Hearing & Speech Care
          </p>
          <h1>
            Qualified & Experienced
            <br />
            Audiologist & Speech Pathologist
          </h1>

          <p className="contact-breadcrumb">
            AawAZ Hearing &amp; Speech Care Center &gt; <span>Contact Us</span>
          </p>
        </div>
      </section>

      {/* Form + Info cards */}
      <section className="contact-main">
        <div className="contact-inner">
          {/* Form */}
          <div className="contact-form-card">
            <h3>Get in Touch</h3>
            <form>
              <div className="contact-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="contact-row">
                <input type="text" placeholder="Your Phone" />
                <input type="text" placeholder="Your Subject" />
              </div>

              <textarea rows="4" placeholder="Your Message" />

              <div className="contact-row human-row">
                <label className="human-label">
                  <input type="checkbox" className="human-checkbox" />
                  <span className="checkmark"></span>
                  Are you human?
                </label>
              </div>

              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </div>

          {/* Contact info panel */}
          <div className="contact-info-card">
            <h3>Contact Info</h3>
            <hr />

            <div className="contact-info-item">
              <FaMapMarkerAlt />
              <p>
                Room no. 105, Butwal
                <br />
                Complex, Butwal, Nepal
              </p>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt />
              <p>+977 981-3379393</p>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt />
              <p>+977 071-000000</p>
            </div>

            <div className="contact-info-item">
              <FaEnvelope />
              <p>aawazhearing@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe
          title="AawAZ Hearing & Speech Care Center Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.104634682337!2d83.461!3d27.700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sButwal%2C%20Nepal!5e0!3m2!1sen!2snp!4v0000000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
