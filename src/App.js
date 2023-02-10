import React from "react";

import MyNavbar from "./components/navbar";
import MyCarousel from "./components/carousel";
import Footer from "./components/footer";
import Body from "./components/body";
import Header from "./components/Header";

export default function App() {
    return (
        <div>
            <MyNavbar/>
            <MyCarousel />
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}