import React from "react";
import Header from '../Component/Header/Header'
import Deal from '../Component/Counterdowntimer/Deal'
import Main from '../Component/Main/Main'
import Catagercard from '../Component/Catagerycard/Catagerycard'
import Send from '../Component/Quarysend/Send'
import Productcard from '../Component/Productcard/Productcard'
import Extra from '../Component/Extraservice/Extra'
import Newletter from '../Component/NewletterForm/Newletter'
import Footer from '../Component/Footer/Footer'
import Categorycard1 from "../Component/Catagerycard1/Catagerycard1";

const Home = ()=>{
    return(
<div>
    <Header></Header>
     <Main></Main>
     <Deal></Deal>
     <Catagercard></Catagercard>
     <Categorycard1></Categorycard1>
     <Send></Send>
     <Productcard></Productcard>
     <Extra></Extra>
     <Newletter></Newletter>
     <Footer></Footer>
</div>
    )
}
export default Home