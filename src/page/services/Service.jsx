import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Service Single</h1>
        <p>Home &gt; Service Single</p>
      </div>

      <div className="service-content">
        <div className="service-sidebar">
          <div className="all-services">
            <h3>All Services</h3>
            <ul>
              <li>Tax Planning</li>
              <li>Personal Tax</li>
              <li>Insurance Tax</li>
              <li>Corporate Tax</li>
              <li>Tax Audit Support</li>
              <li>Investment Advisor</li>
              <li>Tax Advisory</li>
              <li>International Tax</li>
            </ul>
          </div>
          <div className="downloads">
            <h3>Download</h3>
            <button>Download Brochure</button>
            <button>Download Application</button>
          </div>
        </div>

        <div className="service-details">
          <img
            src="https://img.freepik.com/free-vector/tax-service-branding-identity-corporate-vector-logo-bundle-design_460848-13825.jpg"
            alt="Tax Audit Support"
            className="main-img"
          />
          <h2>Tax Audit Support</h2>
          <p>
            Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...
          </p>

          <div className="work-images">
            <img
              src="https://legaldev.in/assets/img/services/professional-tax.webp"
              alt="Work Process"
            />
            <img
              src="https://www.taxhelpdesk.in/wp-content/uploads/2020/05/Goods-and-Service-Tax-Registration.png"
              alt="Work Meeting"
            />
          </div>

          <div className="work-process">
            <h3>Our Work Process</h3>
            <ul>
              <li>We create a plan for your taxes</li>
              <li>Understand your income and goals</li>
              <li>Assign a dedicated advisor</li>
              <li>Make sure returns are filed on time</li>
              <li>Regular updates and reports</li>
            </ul>
          </div>

          <div className="service-features">
            <h3>Service Features</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Case in molestiae quam...
            </p>
          </div>

          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <details>
              <summary>What is tax audit support?</summary>
              <p>It’s assistance during an audit to ensure compliance with tax laws and representation.</p>
            </details>
            <details>
              <summary>Do I need tax audit services?</summary>
              <p>If you're running a business or have complex returns, it’s recommended.</p>
            </details>
            <details>
              <summary>Is my data secure with you?</summary>
              <p>Yes, we maintain confidentiality and data security protocols.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
