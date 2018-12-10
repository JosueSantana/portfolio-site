import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const jsx = (
  <div>
    <Portfolio />
    <Footer />
  </div>
);

ReactDOM.render(jsx, document.querySelector('#app'));