import React from "react"

import Navbar from "./nav"
import Main from "./main"

import './style.css';


export default function App1(){
    return(
        <div className="app">
            <Navbar />
            <Main />
        </div>
    )
}