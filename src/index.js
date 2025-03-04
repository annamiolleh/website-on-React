import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App' // импорт
import './scss/main.scss'
import './scss/reset.scss'

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<App />)