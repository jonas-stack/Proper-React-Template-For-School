import ReactDOM from 'react-dom/client'
import App from "./components/App.tsx";
import './styles.css';
import './global.css'
import React, {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </StrictMode>
)