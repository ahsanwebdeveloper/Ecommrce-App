import React from "react";
import Header from "../Component/Header/Header";
import Carddetail from "../Component/Carddetail/Carddetail";
import ProductDescription from "../Component/ProductDescritption/ProductDescritption";
import Youmake from "../Component/Youmake/Youmake";
import RelateProduct from "../Component/RelateProduct/RelateProduct";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";

const Carddetailp=()=>{
    return(
        <div>
            <Header></Header>
            <Carddetail></Carddetail>
            <div className="Youmakelike">
            <ProductDescription></ProductDescription>
            <Youmake></Youmake>
            </div>
            <RelateProduct></RelateProduct>
            <Banner></Banner>
            <Footer></Footer>
            
            

        </div>
    )
}
export default Carddetailp