import React from "react";
import '/src/Component/Quarysend/Send.css';
const Send = ()=>{
    return(
        <>
        <div className="send">
            <div className="sendpart">
                <div className="sendpart1">
                    <h2>An easy way to send request to supplier</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, itaque minima dignissimos laboriosam.</p>
                    <button>Send Query</button>
                </div>
                <div className="sendpart2">
                    <div className="form">
                        <form>
                            <h3>Send quote to supplier</h3>
                            <br></br>
                            <input type="text" placeholder="what item you need" id="inp"></input>
                            <br></br>
                            <textarea placeholder="type more detail"></textarea>
                            <br></br>
                            <div className="form1">
                            <div className="quantity">
                                <input type="number" placeholder="Quantity" id="num"></input>
                                

                            </div>
                            <div className="pices">
                            <input type="number" placeholder="pic" id="num"></input>
                            </div>
                            </div>
                            <button>Submite</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Send