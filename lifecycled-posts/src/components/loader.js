
import React from 'react';
import '../styles/loader.css';

const Loading = () => {
    return (
        <div className="gif">
            <img src={require("../images/loading.gif")} alt="Loading"/>
        </div>
    )
}

export default Loading;