// footer.js
import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2024 WhereToNow</span>
        <span className="footer-divider">|</span>
        <a href="/about">About Us</a>
        <span className="footer-divider">|</span>
        <a href="/contact">Contact</a>
        <span className="footer-divider">|</span>
        <a href="/privacy">Privacy Policy</a>
        <span className="footer-divider">|</span>
        <a href="/terms">Terms of Service</a>
        <span className="footer-divider">|</span>
        <span>
          Follow us:
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
