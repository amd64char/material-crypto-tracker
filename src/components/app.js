import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import $ from "jquery";

import "../css/site.css";

export default function App(props) {
    
    //console.log(props, 'props');
    
    return (
        <React.Fragment>
            <Header />
            <main className="pt-5 mx-lg-5">
                <div className="container-fluid mt-5">
                    <Main apiBaseUrl={props.apiBaseUrl} />
                </div>
            </main>
            <Footer currentDate={props.currentDate} />
        </React.Fragment>
    );
    
}