import React, { useEffect, useRef } from "react";
import "../styles/services.css";

export default function Services() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
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
        <h1>Services</h1>
      </div>

      <div className="services-intro fade-up">
        <p>
          You’ve come to the right place. Aawaz Speech & Hearing Center offers
          a wide range of services and expert care.
        </p>
      </div>

      <div className="services-list">

        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 0)}>
          <img src="/images/service1.jpg" alt="" />
          <div className="service-content">
            <h2>Hearing Tests</h2>
            <p>Complete diagnostic hearing evaluations using modern tools.</p>
          </div>
        </div>

        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 1)}>
          <div className="service-content">
            <h2>Hearing Aid Fittings</h2>
            <p>Expert fitting & tuning for maximum clarity and comfort.</p>
          </div>
          <img src="/images/service2.jpg" alt="" />
        </div>

        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 2)}>
          <img src="/images/service3.jpg" alt="" />
          <div className="service-content">
            <h2>Tinnitus Assessment</h2>
            <p>Therapy & sound training to reduce ringing sensations.</p>
          </div>
        </div>

        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 3)}>
          <div className="service-content">
            <h2>Speech & Language Therapy</h2>
            <p>Structured speech therapy for children and adults.</p>
          </div>
          <img src="/images/service4.jpg" alt="" />
        </div>

      </div>

      <div className="help-section fade-up">
        <div className="help-text">
          <h3>Need Help?</h3>
          <h2>Call us</h2>
          <p>📞 981-3375935</p>
          <button>Contact Us</button>
        </div>

        <img src="/images/help.jpg" alt="Help" className="help-img" />
      </div>

    </div>
  );
}
