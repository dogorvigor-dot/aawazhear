import React, { useEffect } from "react";
import "../styles/about.css";

export default function About() {
  // SCROLL REVEAL ANIMATIONS
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

      {/* HEADER STRIP */}
      <section className="header-strip fade-down">
        <h2>About Us</h2>
      </section>

      {/* SECTION 1 */}
      <section className="section-row slide-left">
        <div className="image-box zoom-hover">
          <img src="/about1.jpg" alt="clinic" />
        </div>

        <div className="text-box">
          <h3>Meet our clinic</h3>
          <p>
            Aawaz Hearing and Speech Care Center provides exceptional audiology
            and speech therapy services with accurate diagnosis and modern
            technology.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section-row reverse slide-right">
        <div className="text-box">
          <h3>Hearing tests available at our center</h3>

          <ul>
            <li>Pure Tone Audiometry (PTA/Audiogram)</li>
            <li>Immittance Testing (Tympanometry, Acoustic Reflexes)</li>
            <li>Behavioral Observation Audiometry (BOA)</li>
            <li>Otoacoustic Emission (OAE)</li>
            <li>Auditory Brainstem Response (ABR/BERA)</li>
          </ul>
        </div>

        <div className="image-box zoom-hover">
          <img src="/about2.jpg" alt="doctor" />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="full-strip fade-in">
        <h3>Speech and Language Therapy Includes</h3>

        <div className="list-box">
          <ul>
            <li>Sound Imaging Channels</li>
            <li>Bandwidth Extended to 10kHz</li>
            <li>Wireless Streaming & Audio Processing</li>
            <li>Music Optimization</li>
            <li>Noise Reduction Technology</li>
            <li>Feedback Management</li>
          </ul>

          <ul>
            <li>Directional Processing</li>
            <li>Dynamic Range Optimization</li>
            <li>Frequency Lowering</li>
            <li>Tinnitus Technology</li>
            <li>Wireless Accessories</li>
          </ul>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-intro fade-in">
        <h3>About Our Team</h3>
        <p>
          Our certified audiologists and speech therapists provide high-quality
          diagnosis, therapy, and rehabilitation for all ages.
        </p>

        <div className="team-cards">
          <div className="team-card fade-up">
            <img src="/team1.jpg" alt="team" />
            <h4>Certified Audiologists</h4>
            <p>Experts in hearing assessment & device fitting.</p>
          </div>

          <div className="team-card fade-up">
            <img src="/team2.jpg" alt="team" />
            <h4>Speech Therapists</h4>
            <p>Improving communication through targeted therapy.</p>
          </div>

          <div className="team-card fade-up">
            <img src="/team3.jpg" alt="team" />
            <h4>Care Specialists</h4>
            <p>Dedicated to patient support & guidance.</p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission fade-in">
        <h3>Our Vision & Mission</h3>

        <div className="vm-box">
          <div className="vm-card slide-left">
            <h4>Our Vision</h4>
            <p>
              To become a trusted hearing and speech care provider by delivering
              world-class services, advanced technology, and compassionate care.
            </p>
          </div>

          <div className="vm-card slide-right">
            <h4>Our Mission</h4>
            <p>
              To improve lives by offering accurate diagnosis, personalized 
              therapy, and high-quality rehabilitation for all age groups.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose fade-up">
        <h3>Why Choose Aawaz Hearing & Speech Care?</h3>

        <div className="why-grid">
          <div className="why-card fade-up">
            <img src="/icon1.png" alt="icon" />
            <h4>Experienced Specialists</h4>
            <p>Qualified audiologists & speech therapists with years of experience.</p>
          </div>

          <div className="why-card fade-up">
            <img src="/icon2.png" alt="icon" />
            <h4>Modern Equipment</h4>
            <p>Advanced diagnostic tools for accurate hearing assessment.</p>
          </div>

          <div className="why-card fade-up">
            <img src="/icon3.png" alt="icon" />
            <h4>Personalized Care</h4>
            <p>Customized therapy plans tailored to each patient’s needs.</p>
          </div>

          <div className="why-card fade-up">
            <img src="/icon4.png" alt="icon" />
            <h4>Friendly Environment</h4>
            <p>Comfortable clinic setting ideal for children & adults.</p>
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="journey-section slide-up">
        <h3>How We Help You</h3>

        <div className="journey-steps">
          <div className="step fade-up">
            <span>1</span>
            <h4>Book an Appointment</h4>
            <p>Call or visit the clinic to schedule your evaluation.</p>
          </div>

          <div className="step fade-up">
            <span>2</span>
            <h4>Get Assessed</h4>
            <p>We perform detailed hearing & speech evaluations.</p>
          </div>

          <div className="step fade-up">
            <span>3</span>
            <h4>Start Treatment</h4>
            <p>Begin your personalized therapy & rehabilitation plan.</p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands-strip fade-in">
        <h3>We Work With Trusted Hearing Aid Brands</h3>

        <div className="brand-logos slide-left">
          <img src="/brand1.png" alt="brand" />
          <img src="/brand2.png" alt="brand" />
          <img src="/brand3.png" alt="brand" />
          <img src="/brand4.png" alt="brand" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials fade-up">
        <h3>What Our Patients Say</h3>

        <div className="testimony-row">
          <div className="testimony-card slide-left">
            <p>"Very friendly staff and accurate diagnosis. Highly recommended!"</p>
            <h4>- Sita K.</h4>
          </div>

          <div className="testimony-card slide-right">
            <p>"My child's speech improved a lot after therapy. Thank you!"</p>
            <h4>- Ramesh P.</h4>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip slide-up">
        <div className="contact-text">
          <h3>Need Help?<br />Call us</h3>
          <p className="phone">981-3573953</p>
          <p>
            Have questions? Need consultation?<br />
            Our experts are ready to assist you.
          </p>
          <button className="contact-btn">CONTACT US</button>
        </div>

        <div className="contact-image zoom-hover">
          <img src="/hearing-aid.jpg" alt="hearing aid" />
        </div>
      </section>

    </div>
  );
}
