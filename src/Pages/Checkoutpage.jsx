import React from "react";
import Header from "../Component/Header/Header";
import Checkout from "../Component/Checkout/Checkout";
import Bill from "../Component/Bill/Bill";
import RelateProduct from "../Component/RelateProduct/RelateProduct";
import Banner from "../Component/Banner/Banner";
import Footer from "../Component/Footer/Footer";
const Checkoutpage=()=>{
    return(
        <div>
            <Header></Header>
            <div className="Youmakelike">
            <Checkout></Checkout>
            <Bill></Bill>
            </div>
            <div className="payment">
                <div className="payment1">
                    <img src="/image/🔹 Icon Color.png"></img>
                    <a href="#">Secure payment</a>
                    <p>Have you ever finaly just</p>
                </div>
                <div className="payment1">
                <img src="/image/🔹 Icon Color.png"></img>
                    <a href="#">Secure payment</a>
                    <p>Have you ever finaly just</p>
                </div>
                <div className="payment1">
                <img src="/image/🔹 Icon Color.png"></img>
                    <a href="#">Secure payment</a>
                    <p>Have you ever finaly just</p>
                </div>
            </div>
            <RelateProduct></RelateProduct>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    )
}
export default Checkoutpage