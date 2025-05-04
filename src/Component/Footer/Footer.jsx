import React from "react"
import "/src/Component/Footer/Footer.css"
const Footer=()=>{
    return(
        <>
           <footer>
            <div className="footer1">
                <div className="footer2">
                <img src="/image/logo-colored.svg" alt="log" />
                <p>Best information about the company gies here but learn more</p>
                <div className="socialmedia">
                <img src="/image/fill 83.png"  alt="log" />
                <img src="/image/fill 85.png"  alt="log" />
                <img src="/image/Fill 183.png"  alt="log" />
                <img src="/image/Fill 209.png"  alt="log" />
                <img src="/image/fill 83.png"  alt="log" />
                </div>
                </div>
                <div className="footer3">
                    <div className="informat">
                        <p>About</p>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">find store</a></li>
                            <li><a href="#">categories</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="informat">
                        <p>partnership</p>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">find store</a></li>
                            <li><a href="#">categories</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="informat">
                        <p>Information</p>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Money refund</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="informat">
                        <div>User</div>
                        <ul>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Money refund</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="informat">
                        <p> Get App</p>
                        <img src="/image/Subtract.png" id="image" alt="log" />
                        <br></br>
                        <img src="/image/Logo.png" id="image" alt="log" />
                    </div>
                </div>
               
            </div>





            </footer> 
            <div className="footer-down">
                    <a href="#">2023 Ecommrce</a>
                    <a href="#">
          English <img src="/image/IT@2x.png" alt="Germany Flag" className="flag" />
          <span className="arrow">▾</span>
        </a>
                </div>
           
        </>
    )
}
export default Footer