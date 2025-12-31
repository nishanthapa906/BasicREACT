import React, { useState } from 'react'
import './Register.css'

function Register() {
    const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phone: "",
    email: "",
    acceptTerms: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
    return (
        <div className="form-container">
      <div className="general-info">
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <select name="title" value={formData.title} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>
          </label>

          <div className="flex-row">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Position
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>

          <div className="flex-row">
            <label>
              Business Arena
              <input
                type="text"
                name="businessArena"
                value={formData.businessArena}
                onChange={handleChange}
              />
            </label>
            <label>
              Employees
              <select
                name="employees"
                value={formData.employees}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
              </select>
            </label>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <h2>Contact Details</h2>
            <label>
              Street + Nr
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </label>
            <label>
              Additional Info
              <input
                type="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </label>
            <div className="flex-row">
              <label>
                Zip Code
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </label>
              <label>
                Place
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label>
              Country
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Nepal">Nepal</option>
                <option value="USA">USA</option>
              </select>
            </label>

            <div className="flex-row">
              <label>
                Code +
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              Your Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              I accept the{" "}
              <a href="#">Terms and Conditions</a>
            </label>

            <button type="submit">Register Badge</button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Register
