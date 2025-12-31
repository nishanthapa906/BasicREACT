import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product-page">
      <section className="product-section">
        <h1>Our Products</h1>
        <p>
          Explore our wide range of products designed to make your life easier and more enjoyable. 
          Each product is carefully crafted with attention to detail, ensuring top performance and reliability.
        </p>
        <div className="product-cards">
          <div className="product-card">
            <h3>Smart Home Device</h3>
            <p>Innovative technology for smarter living, easy to use, fully customizable, durable, and energy-efficient.</p>
          </div>
          <div className="product-card">
            <h3>Portable Gadget</h3>
            <p>Compact and stylish design, perfect for travel or daily use, reliable performance anytime, anywhere.</p>
          </div>
          <div className="product-card">
            <h3>Everyday Essentials</h3>
            <p>High-quality materials, affordable, long-lasting, designed to simplify your daily routine.</p>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Product
