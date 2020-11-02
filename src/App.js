import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import RainHeart from './components/rainheart/RainHeart';
// import Home from './components/home';
import Loading from './components/Loading/Loading';
const Home = React.lazy(() => import('./components/home'));
function App(props) {
    const [projects, setProjects] = useState([]);
    // const [pageNumbers, setpageNumbers] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(3);


    const trimStart = (currentPage - 1) * postsPerPage;
    const trimEnd = trimStart + postsPerPage;
    const trimmedData = projects.slice(trimStart, trimEnd);
    const totalPages = Math.ceil(projects.length / postsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
   
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "js/script.js";
        script.async = true;
        document.body.appendChild(script);

        fetch('https://api.github.com/users/thanghoian123/repos')
        .then(response => response.json())
        .then(data => setProjects(data));
    }, []);

    const pagination = (number) =>{
        const row = document.querySelector('.projects .row');
        row.classList.remove('slide-item');
        row.classList.add('slide-item');
        setcurrentPage(number);
    }

    return (
        <Suspense fallback={<Loading />}>
            <RainHeart />
            <Header />
            <Home
                projects={projects}
                pageNumbers={pageNumbers}
                trimmedData={trimmedData}
                pagination={pagination}
            />
        </Suspense>

    );
}

export default App;
