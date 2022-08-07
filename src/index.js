import React from 'react';
import ReactDOM from 'react-dom/client';
import Buttons from './App.jsx';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Buttons />);
