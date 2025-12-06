import React, { useEffect } from "react";
import "../styles/about.css";

export default function About() {

  // SCROLL REVEAL ANIMATION
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".fade-in, .fade-up, .fade-down, .slide-left, .slide-right, .slide-up"
    );

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="about-page">

      {/* HERO BANNER */}
      <section className="hero-banner fade-down">
        <div className="hero-text">
          <h1>Aawaz Hearing & Speech Care Center</h1>
          <p>Your trusted partner for hearing, speech & communication wellness.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-row slide-left">
        <div className="image-box zoom-hover">
          <img
            src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
            alt="clinic"
          />
        </div>

        <div className="text-box">
          <h2>Who We Are</h2>
          <p>
            We are a specialized hearing and speech diagnostic center committed
            to improving lives through advanced evaluation, therapy, and rehabilitation.
          </p>
          <p>
            Our mission is to deliver world-class care using modern technology
            and compassionate support for all ages.
          </p>
        </div>
      </section>

      {/* OUR SERVICES OVERVIEW */}
      <section className="wide-section fade-in">
        <h2>What We Provide</h2>
        <p className="center-text">
          A complete range of hearing and speech solutions—from diagnosis to rehabilitation.
        </p>

        <div className="service-grid">
          <div className="service-card fade-up">
            <img src="https://images.pexels.com/photos/8460031/pexels-photo-8460031.jpeg" alt="" />
            <h4>Hearing Assessments</h4>
            <p>PTA, Tympanometry, OAE, ABR & more advanced tests.</p>
          </div>

          <div className="service-card fade-up">
            <img src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg" alt="" />
            <h4>Speech Therapy</h4>
            <p>For children & adults with speech, fluency & language disorders.</p>
          </div>

          <div className="service-card fade-up">
            <img src="https://images.pexels.com/photos/8460128/pexels-photo-8460128.jpeg" alt="" />
            <h4>Hearing Aids</h4>
            <p>Digital, rechargeable & Bluetooth-enabled solutions.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section fade-in">
        <h2>Meet Our Specialists</h2>
        <p className="center-text">
          Experienced & certified professionals dedicated to better hearing and communication.
        </p>

        <div className="team-cards">
          <div className="team-card slide-up">
            <img src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg" alt="" />
            <h4>Audiologists</h4>
            <p>Experts in hearing evaluation & rehabilitation.</p>
          </div>

          <div className="team-card slide-up">
            <img src="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg" alt="" />
            <h4>Speech Therapists</h4>
            <p>Helping children & adults communicate effectively.</p>
          </div>

          <div className="team-card slide-up">
            <img src="https://images.pexels.com/photos/8460155/pexels-photo-8460155.jpeg" alt="" />
            <h4>Care Professionals</h4>
            <p>Ensuring a friendly, supportive & comfortable experience.</p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process-section fade-in">
        <h2>Our Care Journey</h2>

        <div className="process-steps">
          <div className="step slide-left">
            <span>01</span>
            <h4>Book Consultation</h4>
            <p>Schedule your appointment at your convenience.</p>
          </div>

          <div className="step slide-up">
            <span>02</span>
            <h4>Assessment & Diagnosis</h4>
            <p>Accurate tests using modern equipment.</p>
          </div>

          <div className="step slide-right">
            <span>03</span>
            <h4>Begin Treatment</h4>
            <p>Personalized therapy & rehabilitation plans.</p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands-section fade-in">
        <h2>Trusted Hearing Aid Partners</h2>

        <div className="brand-logos slide-left">
          <img src="https://via.placeholder.com/150x60?text=Widex" alt="" />
          <img src="https://via.placeholder.com/150x60?text=Signia" alt="" />
          <img src="https://via.placeholder.com/150x60?text=Phonak" alt="" />
          <img src="https://via.placeholder.com/150x60?text=Resound" alt="" />
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip slide-up">
        <div className="contact-text">
          <h2>Need Assistance?</h2>
          <p className="phone">981-3573953</p>
          <p>Our experts are ready to guide you on hearing & speech solutions.</p>
          <button className="contact-btn">Contact Us</button>
        </div>

        <div className="contact-image zoom-hover">
          <img
            src="https://images.pexels.com/photos/7088523/pexels-photo-7088523.jpeg"
            alt="hearing aid"
          />
        </div>
      </section>

    </div>
  );
}
