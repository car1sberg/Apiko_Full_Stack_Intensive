import React from 'react';
import '../styles/to-top.css'; 

function ToTopBtn() {

    window.onscroll = () => scrollFunction();

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    };

    function toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    

    return <button onClick={toTop} id="myBtn" title="Go to top">To top</button>
};

export default ToTopBtn;