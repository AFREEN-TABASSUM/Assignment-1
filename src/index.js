import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Profile from './Profile';

const rootElement=document.getElementById('root');
const rootRef=ReactDOM.createRoot(rootElement);
rootRef.render(<div className="App"><Profile /></div>);