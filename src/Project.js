import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToBottom from 'react-scroll-to-bottom';



const itemms = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  } 
export default function Projects() {



    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.3
          }
        }
      }


  

    const items = [
        {
            name: "Version Control System",
            image: "version.png",
            website:"https://gleeful-salmiakki-6264d5.netlify.app/",
            frontend: "https://github.com/kathiresanh/VersionControlSystem-Frontend",
            backend: "https://github.com/kathiresanh/version-control-backend",
            content: "This version control system allows the users to track the changes continously. Each history  is recorded. each time stamp and user name is updated in database."
        },
        {
            name: "Shop Easy",
            image: "shopeasy.png",
            website:"https://shiny-pegasus-4acbdc.netlify.app/",
            frontend: "https://github.com/kathiresanh/shopeasy-frontend",
            backend: "https://github.com/kathiresanh/shopeasy-backend",
            content: "Shop Easy is the simple online shop here we can buy the products place orders and add to cart options are implemented , also here payment gateway also integrated."
        },
        {
            name: "Optical Character Recognition",
            image: "OCR.jpg",
            website:"https://unrivaled-madeleine-26eaac.netlify.app/",
            frontend: "https://github.com/kathiresanh/imageToText-frontend",
            backend: "https://github.com/kathiresanh/imgageToText-backend",
            content: "OCR is Optical Character Recognition it used to scan the docoument as a picture and the convert the text into machine readable format, simply it has more useful applications."
        },
        {
            name: "Chat Easy",
            image: "chat.jpg",
            website:"https://bespoke-brigadeiros-b90626.netlify.app/",
            frontend: "https://github.com/kathiresanh/chatapp-frontend",
            backend: "https://github.com/kathiresanh/chatapp-backend",
            content: "Chat Easy is simple chat app integrated with websockets, websocket is special method to implement the bidirectional data transmission and low latency communication ."
        },
    ]
    return (
        
             <motion.div className="container-fluid " id="project-board"  animate="show" variants={container}
             initial="hidden">
           
              {/* <div className="card shadow-lg bg-white" id="project-card"> */}
          
                    <ScrollToBottom> 
                 <div className="card-body" id="projectpage">
                  {/* <div className="d-flex justify-content-end p-1"><Link to="/"><button className="btn btn-danger p-0">Home page</button></Link></div> */}
                      <AnimateSharedLayout>
                          <motion.div  layout initial={{ borderRadius: 25 }} id="project-section">
                              {items.map(item => (
                                  
                                           <Item data={item} />
                                  
                              ))}
                          </motion.div>
                      </AnimateSharedLayout>
                  </div>
                  </ScrollToBottom>  
                
              
              </motion.div>
       
       
     
    )
}



function Item(props) {
    const [isOpen, setIsOpen] = useState(true);


    const toggleOpen = () => setIsOpen(isOpen);

    return (

        <motion.div variants={itemms} onHoverStart={toggleOpen} onHoverEnd={toggleOpen} class=" card shadow-lg bg-white "  id="projects-list">
            
            <h3 className="p-3">{props.data.name}</h3>
            <img src={`./images/${props.data.image}`} className="p-3" id="project-image" height="180px" width="250px"></img>
            <motion.div layout initial={{ borderRadius: 10 }} >
                <AnimatePresence>{isOpen && <Content data1={props.data} />}</AnimatePresence>
            </motion.div>
        </motion.div>


    );
}

function Content(props) {
    return (
        <motion.div
            layout
        
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="project-content"
        >
            <h6 className="p-3">{props.data1.content}</h6>
            <div class="d-flex flex-column p-3" >
                 <a className="btn btn-success mt-2" href={props.data1.website} target="_blank">Visit Website</a>

                 <a className="btn btn-primary mt-2" href={props.data1.frontend} target="_blank">View frontend source code</a>

                 <a className="btn btn-secondary mt-2" href={props.data1.backend} target="_blank">View backend source code</a>
            </div>
        </motion.div>
    );
}
