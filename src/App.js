import React, { Suspense, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import RainHeart from './components/rainheart/RainHeart';
// import Home from './components/home';
import Loading from './components/Loading/Loading';
const Home = React.lazy(()=> import('./components/home'));
function App(props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src="js/script.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <Suspense fallback={<Loading/>}>
            <RainHeart/>
            <Header/>
            <Home/>
        </Suspense>
        
    );
}

export default App;
