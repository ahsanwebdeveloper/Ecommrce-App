import React from "react";
import Header from "../Component/Header/Header";
import Rang from "../Component/Rang/Rang";
import ProductList from "../Component/Productname/Productlist";
import '/src/Pages/Product.css'
import Newletter from "../Component/NewletterForm/Newletter";
import Footer from "../Component/Footer/Footer";
const Product = ()=>{
    return(
        <div>
            <Header></Header>
            <div className="productlist">
            <Rang></Rang>
            <ProductList></ProductList>
            </div>
            <Newletter></Newletter>
            <Footer></Footer>
        
        </div>
    )
}
export default Product