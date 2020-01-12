"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Catalog from './components/Catalog';

let questionText='Математика с подвохой';
let products=require('./components/products.json');


ReactDOM.render(
  <Catalog 
    question={questionText}
    products={products}
  />
  , document.getElementById('container') 
);

