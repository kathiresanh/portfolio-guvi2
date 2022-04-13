import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


export default function Contact(){
    return(
        
            <div className="container-fluid" >
                {/* <div className="card shadow-lg bg-white" id="project-card"> */}
                    <div className="card-body card shadow-lg bg-white" id="contact-card">
                        {/* <div className="d-flex justify-content-end p-1"><Link to="/"><button className="btn btn-danger p-0">Home page</button></Link></div> */}
                        <AnimateSharedLayout>
                            <motion.div layout initial={{ borderRadius: 25 }}>
                              <div className="card p-3">
                                  <h2>Let's make something great..</h2>
                              <div className="d-flex justify-content-start">
                                  <h2>Contact</h2>
                              </div>
                             <h4> Feel Free to contact me on below mentioned ways..</h4>

                        <h5> <a href="https://www.gmail.com" target="_blank">hkathiresan@gmail.com</a></h5>
                         <h5>8189970957</h5>
                         <div className="row">
                         <div className="col-sm-3">
                         <a className="btn btn-success text-white" href="https://github.com/kathiresanh" target="_blank">  <img src={`./images/github.png`} height="40px" width="50px"></img>Github</a>
                         </div>
                         <div className="col-sm-3">
                         <a className="btn btn-light text-white" href="https://www.linkedin.com/in/kathiresan-h-23b84821a/" target="_blank">  <img src={`./images/linked.png`} height="50px" width="100px"></img></a>
                         </div>
                         <div className="col-sm-3">
                         <a className=" p-2 btn btn-primary" href="https://drive.google.com/file/d/1TTaQlCi5cwh6T80ntAjRu9H1a-U7dhzW/view?usp=sharing" target="_blank"> <h5>View CV</h5></a>
                         </div>
                         </div>

                              </div>
                            </motion.div>
                        </AnimateSharedLayout>
                    </div>
                </div>
            // </div>
        )
    }
 
