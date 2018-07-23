import React from 'react';
import {render} from 'react-dom';
import './style/bootstrap.css';
import Home from './pages/container/home.js';

// Se renderiza los elementos creados a traves del container especificando en que parte se quiere ver
render(<Home />, document.getElementById('root'));

