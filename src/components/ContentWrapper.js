import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import FooterTablaAntes from "./FooterTablaAntes";
import TopBar from "./TopBar";
import '../assets/css/app.css';

function ContentWrapper(){
    return(
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <ContentRowTop/> 
            </div>
                <FooterTablaAntes/>             
                <Footer/>
        </div> 
    )
}

export default ContentWrapper;