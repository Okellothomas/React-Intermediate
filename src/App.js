import React from "react";

import MyNavbar from "./components/navbar";
import MyCarousel from "./components/carousel";
import Footer from "./components/footer";
import Body from "./components/body";

export default function App() {
    return (
        <div>
            <MyNavbar/>
            <MyCarousel />
            <Body />
            <Footer/>
        </div>
    )
}