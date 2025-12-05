import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  // ------------------- SCROLL ANIMATIONS -------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-in, .slide-left, .slide-right")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home">
      {/* =================== HERO SECTION =================== */}
      <section className="hero">
        <div className="hero-slider">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            navigation
            loop
          >
            <SwiperSlide>
              <img
                src="/images/slider1.jpg"
                alt="Hearing Care Banner 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/images/slider2.jpg"
                alt="Hearing Care Banner 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/images/slider3.jpg"
                alt="Hearing Care Banner 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="hero-text fade-in">
          <h1>Let’s Celebrate Every Sound of Life!</h1>
          <p>Advanced hearing care for you and your loved ones.</p>

          <NavLink to="/contact">
            <button className="btn-primary hero-btn">Book Appointment</button>
          </NavLink>
        </div>
      </section>

      {/* =================== WELCOME =================== */}
      <section className="section section-light fade-in">
        <h2>Welcome to Aawaz Hearing Clinic</h2>
        <p>
          We provide high-quality hearing evaluations, speech therapy and
          advanced digital hearing aid technology for all age groups.
        </p>
      </section>

      {/* =================== SERVICES =================== */}
      <section className="section section-white">
        <h2 className="slide-left">Our Key Services</h2>

        <div className="service-grid fade-in">
          <div className="service-card">
            <img src="/images/service1.jpg" alt="Hearing Test" />
            <h3>Hearing Test</h3>
            <p>Complete diagnostic hearing evaluation.</p>
          </div>

          <div className="service-card">
            <img src="/images/service2.jpg" alt="Speech Therapy" />
            <h3>Speech Therapy</h3>
            <p>Specialized speech & language services for all ages.</p>
          </div>

          <div className="service-card">
            <img src="/images/service3.jpg" alt="Digital Hearing Aids" />
            <h3>Digital Hearing Aids</h3>
            <p>Top brands with latest digital features.</p>
          </div>
        </div>
      </section>

      {/* =================== BRANDS =================== */}
      <section className="section section-grey">
        <h2 className="slide-right">Top Hearing Aid Brands</h2>

        <div className="brand-logos fade-in">
          <img src="/images/brand1.png" alt="Brand 1" />
          <img src="/images/brand2.png" alt="Brand 2" />
          <img src="/images/brand3.png" alt="Brand 3" />
          <img src="/images/brand4.png" alt="Brand 4" />
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section className="section section-cream">
        <h2 className="fade-in">What Our Patients Say</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <div className="testimonial-card slide-left">
              <p>
                “Amazing service! My father can hear clearly again. Highly
                recommended!”
              </p>
              <h4>— Patient A</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card slide-right">
              <p>“Professional staff and excellent care. Very satisfied.”</p>
              <h4>— Patient B</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* =================== CONTACT CTA =================== */}
      <section className="section section-light fade-in">
        <h2>Need Help With Hearing?</h2>
        <p>Contact us for evaluations, treatment and expert advice.</p>

        <NavLink to="/contact">
          <button className="btn-primary contact-btn">
            Contact Us
          </button>
        </NavLink>
      </section>
    </div>
  );
}
