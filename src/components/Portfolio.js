import React from 'react';

const Portfolio = () => {
  return (
    <main className="content-container portfolio">
      <div className="portfolio__row">
        <h2>Costa</h2>
        <div className="portfolio__item">
          <a href="https://costa-84778.herokuapp.com"><img className="portfolio__item__image" src="images/corgi.jpg" alt="Costa image" /></a>
          <div className="portfolio__item__description">
            <p>
              Costa is a web application that aims to improve planning travel by identifying the best options in flights, lodging, local
              attractions and more based on your preferences. All you are expected to do is fill out the form, telling Costa where
              you wish to travel, what your budget is, and what your preferences are. The application will generate an itinerary with
              its suggestions, which can be viewed in your list of itineraries. You can filter through your itineraries based on a number
              of criteria, too.
            </p>
            <p>
              Costa is a work in progress. The application is being developed in <span className="portfolio__emphasize">React</span>.
            </p>
          </div>
        </div>
      </div>
      <hr className="portfolio__divider--dark" />
      <div className="portfolio__row">
        <h2>Expense Tracker</h2>
        <div className="portfolio__item">
          <p className="portfolio__item__description">
            The expense tracker is a <span className="portfolio__emphasize">React</span> web application that shows a list of expenses
            submitted by the user through the expense form. On the error-proof form, the user enters a title, an expense amount
            (in dollars), the date the expense was made, and an optional note on the expense. All the user expenses are safely stored
            in the <span className="portfolio__emphasize">Firebase</span> real-time database. The user may log in with a valid Google
            user account that is validated through <span className="portfolio__emphasize">Firebase's</span> authentication interface,
            and expenses are unique to each account. The expenses can also be edited or deleted at will, and the user can view their
            expenses through a variety of filter options.
          </p>
          <a href="https://expensify-jasr.herokuapp.com"><img className="portfolio__item__image" src="images/goldie.jpg" alt="Expense Tracker image" /></a>
        </div>
      </div>
      <hr className="portfolio__divider--light" />
      <div className="portfolio__row">
        <h2>Pocket Calculator</h2>
        <div className="portfolio__item">
        <a href="https://react-calc-jasr.herokuapp.com"><img className="portfolio__item__image" src="images/pom.jpg" alt="Pocket Calculator image" /></a>
          <p className="portfolio__item__description">
            The pocket calculator is a simple web application implemented with <span className="portfolio__emphasize">React</span> that
            aims to emulate a physical calculator that takes button inputs to type out an arithmetic expression on the device's screen.
            The expression can be complex, that is to say, it can include multiple operations, ultimately evaluated with the '=' button.
            The operations are evaluated following the PEMDAS order of operations, and the results are printed on the bottom left corner
            of the screen. Potential improvements include adding parentheses for more complex arithmetic operations, and adding special
            operations such as trigonometric functions.
          </p>
        </div>
      </div>
      <hr className="portfolio__divider--light" />
    </main>
  );
};

export default Portfolio;