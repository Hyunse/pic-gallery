/* eslint-disable import/first */
import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import App from './App';

global.fetch = fetch;


ReactDOM.render(<App />, document.getElementById('root'));
