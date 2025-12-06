import React, { useEffect, useRef } from "react";
import "../styles/services.css";

export default function Services() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const attachRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="services-page">

      {/* HEADER BANNER */}
      <div className="services-banner fade-down">
        <h1>Our Services</h1>
      </div>

      {/* INTRO */}
      <div className="services-intro fade-up">
        <p>
          At Aawaz Hearing & Speech Care Center, we offer advanced diagnostic services,
          modern treatments, and personalized therapy tailored for all age groups.
        </p>
      </div>

      {/* SERVICES LIST */}
      <div className="services-list">

        {/* 🟦 SERVICE 1 */}
        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 0)}>
          <img
            src="https://images.pexels.com/photos/8460121/pexels-photo-8460121.jpeg"
            alt="Hearing Test"
          />
          <div className="service-content">
            <h2>Hearing Tests</h2>
            <p>
              Complete diagnostic hearing evaluations using advanced tools such as PTA,
              Tympanometry, OAE, and ABR/BERA.
            </p>
          </div>
        </div>

        {/* 🟦 SERVICE 2 */}
        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 1)}>
          <div className="service-content">
            <h2>Hearing Aid Fittings</h2>
            <p>
              Precise fitting and tuning of digital hearing aids for maximum clarity,
              comfort, and natural sound experience.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg"
            alt="Hearing Aid Fitting"
          />
        </div>

        {/* 🟦 SERVICE 3 */}
        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 2)}>
          <img
            src="https://images.pexels.com/photos/5327927/pexels-photo-5327927.jpeg"
            alt="Tinnitus"
          />
          <div className="service-content">
            <h2>Tinnitus Assessment</h2>
            <p>
              Sound therapy, counseling, and treatment plans to reduce ringing
              sensations and improve daily comfort.
            </p>
          </div>
        </div>

        {/* 🟦 SERVICE 4 */}
        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 3)}>
          <div className="service-content">
            <h2>Speech & Language Therapy</h2>
            <p>
              Structured therapy sessions for children and adults to improve speech clarity,
              communication, and language development.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg"
            alt="Speech Therapy"
          />
        </div>

      </div>

      {/* HELP SECTION */}
      <div className="help-section fade-up">
        <div className="help-text">
          <h3>Need Assistance?</h3>
          <h2>Call Us Anytime</h2>
          <p>📞 981-3375935</p>
          <button>Contact Us</button>
        </div>

        <img
          className="help-img"
          src="https://images.pexels.com/photos/7089500/pexels-photo-7089500.jpeg"
          alt="Help support"
        />
      </div>

    </div>
  );
}
