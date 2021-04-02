// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('button', {}, 'This is my code');
ReactDOM.render(template, document.getElementById('app'));