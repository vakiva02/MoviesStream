//Here we include the main call for the App, using DOM for the HTML UI
import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';


ReactDOM.render(<App />, document.getElementById('root')); //No longer used, injects the entire app on it

/*const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);*/