import React from 'react';

const GITHUB_LINK = "https://www.github.com/JosueSantana";
const LINKEDIN_LINK = "https://www.linkedin.com/in/josue-santana-6b32a065/";
const EMAIL_LINK = "mailto:joansanres@gmail.com";

const Footer = () => {
  return (
    <footer className="content-container footer">
      <div className="footer__title">Get In Touch!</div>
      <div className="footer__links">
        <a href={GITHUB_LINK}>Github </a>
        <a href={LINKEDIN_LINK}>LinkedIn </a>
        <a href={EMAIL_LINK}>Email </a>
      </div>
    </footer>
  );
};

export default Footer;