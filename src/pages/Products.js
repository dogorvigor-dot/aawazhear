import React from "react";
import "../styles/products.css";

const products = [
  {
    id: 1,
    name: "Receiver-In-Canal (RIC)",
    img: "/images/products/ric.jpg",
  },
  {
    id: 2,
    name: "In-The-Ear (ITE)",
    img: "/images/products/ite.jpg",
  },
  {
    id: 3,
    name: "Invisible-In-Canal (IIC)",
    img: "/images/products/iic.jpg",
  },
  {
    id: 4,
    name: "Completely-In-Canal (CIC)",
    img: "/images/products/cic.jpg",
  },
  {
    id: 5,
    name: "Behind-The-Ear (BTE)",
    img: "/images/products/bte.jpg",
  },
];

export default function Products() {
  return (
    <div className="products-container">

      <h1 className="products-title">Hearing Aids Products</h1>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-img-wrapper">
              <img src={item.img} alt={item.name} />
            </div>

            <h3>{item.name}</h3>

            <button className="view-btn">View</button>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="help-section">
        <div className="help-text">
          <h2>Need Help?</h2>
          <p>Call us today and our hearing experts will assist you.</p>
          <h3>📞 981-3573993</h3>

          <a href="/contact" className="contact-btn">Contact Us</a>
        </div>

        <img src="/images/products/help.jpg" alt="help" className="help-img" />
      </div>

    </div>
  );
}
