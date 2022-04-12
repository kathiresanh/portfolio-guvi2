import React from "react";
import Skills from "./Skills";
import { motion } from "framer-motion";



export default function Introduction() {
    return (
        <div className="container p-4" id="introduction">
        <div className="row">
        <div className="col-sm-8 pt-4 text-black">
        <div class="d-flex justify-content-start">
                <h2 style={{color:"red"}}>About</h2>
            </div>
            <div class="d-flex justify-content-start mt-2">
            <div>
            
            <motion.div style={{color:"white"}} animate={{ x:[600,0] }}    transition={{ duration: 1}}><div class=" p-4 h4"> Hi , I'm</div><h3 style={{color:"orange",fontSize:"50px"}}>Kathiresan,</h3></motion.div> 
           <p class="h4"> I am <span style={{color:"red"}}>MERN STACK</span> web developer i design & build digital products with best user experience.</p>
            {/* <p>I am the person who looking forward opp</p> */}
            </div>
            </div>
        </div>
        <Skills></Skills>
       
       
        </div>
        </div>
    )
}