import React from "react";
import '/src/Component/NewletterForm/Newletter.css';
const Newletter =()=>{
    return(
        <>
        <div className="newletter">
            <h3>Subscribe our newletter</h3>
            <br></br>
            <p>Get daily new for upcoming offers from many supplier all over the world</p>
            <br></br>
            <div className="inputnew">
                <input type="email" placeholder="Email"></input>
                <button>Subscribe</button>
            </div>
        </div>
        
        </>
    )
}
export default Newletter