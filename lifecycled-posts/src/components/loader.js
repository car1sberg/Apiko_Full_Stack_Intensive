
import React from 'react';
import '../styles/loader.css';

const Loader = () => {
    return (
        <div className="gif">
            <img src={require("../images/loading.gif")} alt="Loader"/>
        </div>
    )
}

export default Loader;