import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home';

function App(props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src="js/script.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div>
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
