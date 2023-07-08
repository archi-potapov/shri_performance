import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header.jsx";
import Main from "./Main.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Header />
        <Main />
    </React.StrictMode>
);
