import React from 'react';
import './style/Aboutus.css';
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>Welcome to <strong>BudgetBuddy</strong>, your number one source for money management. We're dedicated to providing you the best financial advice, with a focus on dependability, customer service, and financial literacy.</p>
      <p>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to help individuals and families achieve financial security and independence through personalized advice and education.</p>
      </div>
      <h2>Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          <img src="tharang.jpg" alt="Joseph Martin" />
          <h3>Joseph Martin</h3>
          <p>Founder & CEO</p>
          <p>Final year BTech student. Focusing more on financial planning and is passionate about helping others achieve their financial goals.</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
