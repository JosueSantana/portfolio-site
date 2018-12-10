import React from 'react';


const handlePopupText = () => {
  console.log("Inside text")
  setTimeout(() => {
    console.log(`Time's up!`);
  }, 5000);
}

const Landing = () => {
  return (
    <div className="content-container landing">
      <img className="landing__image" src="images/santana.jpg" alt="Josue Santana" />
      <div className="landing__text">
        <p className="landing__text--highlight">Hello!</p>
        <p>I am Josue Santana. I am a </p>
        <p className="fade-in_first">Software Engineer</p>
        <p className="fade-in_second">Front-end Developer</p>
        <p className="fade-in_third">Back-end Developer</p>
      </div>
    </div>
  );
};

export default Landing;