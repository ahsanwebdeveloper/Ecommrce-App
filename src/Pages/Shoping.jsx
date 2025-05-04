import React from "react";
import Header from "../Component/Header/Header";
import Rang from "../Component/Rang/Rang";
import Shopinglist from "../Component/Shopinglist/Shopinglist";
import Newletter from '../Component/NewletterForm/Newletter'
import Footer from '../Component/Footer/Footer'
import Filter from '../Component/Filter/Filter.jsx'
import Bomb from '../Component/Bomb/Bomb.jsx'
import Anothfilter from '../Component/Anothfilter/Anothfilter.jsx'

const Shoping = ()=>{
    return(
        <div>
         <Header></Header>
         <Bomb></Bomb>
         <div className="productlist">
         <Rang></Rang>
         <div className="filter">
            <Filter></Filter>
            <Anothfilter></Anothfilter>
        <Shopinglist></Shopinglist>
        </div>
         </div>
         <Newletter></Newletter>
        <Footer></Footer>
        </div>

    )
}
export default Shoping