import React, { useEffect } from 'react';
import './style.css'

function RainHeart(props) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src="js/script2.js";
        script.async=true;
        document.body.appendChild(script)
    }, []);

    const createheart = () =>{
        const rainheart = document.querySelector('.rain-heart');
        const heart = document.createElement('div');
        heart.innerText="💸";
        heart.classList.add('heart');
        heart.style.left = Math.random()*100 + 'vw';
        heart.style.animationDuration = Math.random()*2 + 2+"s";
        rainheart.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);
        
    }

    let i = setInterval(createheart,300)
    
    // setTimeout(() => { clearInterval(i);}, 4000);
    return (
        <div className="rain-heart">
           
        </div>
    );
}

export default RainHeart;