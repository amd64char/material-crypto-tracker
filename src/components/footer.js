import React, { useState } from "react";

export default function Footer(props) {

    let currentDate = props.currentDate;
    
    return (
        <footer className="page-footer text-center font-small primary-color-dark darken-2 mt-4 wow fadeIn">
            <div className="footer-copyright py-3">
                © {currentDate} crypto-tracker
            </div>
        </footer>
    );
}