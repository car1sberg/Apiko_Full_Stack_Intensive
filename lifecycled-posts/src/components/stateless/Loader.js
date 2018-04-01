
import React from 'react';
import '../../styles/Loader.css';

const Loader = () => {
    return (
        <div className="gif">
            <img src={require("../../images/loading.gif")} alt="Loading..."/>
        </div>
    )
}

export default Loader;