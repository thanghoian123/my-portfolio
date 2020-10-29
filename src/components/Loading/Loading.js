import React from 'react';
import './style.css';

function Loading(props) {
    return (
        <div className="body1">
            <div className="loader">
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__ball" />
            </div>
        </div>
    );
}

export default Loading;