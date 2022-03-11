import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <div className="contact">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vmario@ageworld-agency.com"
            target="_blank"
          >
            <h3>Contáctame</h3>
          </a>
        </div>
      </div>
      <div className="copyright-container">
        <div className="copyright">
          <h3>2022 - vMario</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
