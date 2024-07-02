import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./../../style.css"

const About_JSON = ()=>{

    const coder = {
        name :"PAYAL PATEL",
         company : "ACES PVT LTD",
         location : "New Castle,NSW",
         skills:["HTML" , "CSS","REACT","NEXTJS" ,"REDUX" ,"EXPRESS","AWS"],
         hireable:"true"
     }

    return(
        <>
         <h3> 
         👋🏻<span className="purple"> Exploring My Profile </span>  
                  </h3>
                 

        <Container className="gradient-border-parta">
       
                     
                     <div className="dot red-dot"></div>
                     <div className="dot yellow-dot"></div>
                     <div className="dot green-dot"></div>
                  
        </Container>
       
           
            <Container className="gradient-border-partb">
                
               <Row>
                <Col>
                <span  style={{color:"#FF69B4"}}> const </span>
                <span style={{color:"#9370DB"}}> coder </span>
                <span style={{color:"#FF69B4"}}> = </span>
                <span style={{color:"gray"}}>{`{`}</span>
                </Col>
            </Row>
            <Row>
            <Col >
               
                <span className="mr" style={{color:"white"}}> name : </span>
                <span style={{color:"gray"}}> ' </span>
                <span style={{color:"rgb(251 146 60)"}}> PAYAL PATEL </span>
                <span style={{color:"gray"}}> ' </span>
              
            </Col> 
            </Row>  
            <Row>
            <Col >
               
                <span className="mr" style={{color:"white"}}> email : </span>
                <span style={{color:"gray"}}> ' </span>
                <a href="mailto:milopayalse@gmail.com" style={{ color: "rgb(251, 146, 60)" }}>milopayalse@gmail.com</a>
                <span style={{color:"gray"}}> ' </span>
              
            </Col> 
            </Row>  
            <Row>
            <Col >
               
                <span className="mr" style={{color:"white"}}> contactNo : </span>
                <span style={{color:"gray"}}> ' </span>
                <span style={{color:"cyan"}}> 0452 409 018 </span>
                <span style={{color:"gray"}}> ' </span>
              
            </Col> 
            </Row>  
          
            <Row>
            <Col >
               
                <span className="mr" style={{color:"white"}}>  location : </span>
                <span style={{color:"gray"}}> ' </span>
                <span style={{color:"cyan"}}> Sydney,NSW </span>
                <span style={{color:"gray"}}> ' </span>
              
            </Col> 
            </Row> 
                <Row>
            <Col >
               
                <span className="mr" style={{color:"white"}}> skills  : </span>
               
                <span style={{color:"green"}}> ["HTML" , "CSS","REACT","NEXTJS" ,"REDUX" ,"EXPRESS","AWS"]</span>
                
              
            </Col> 
            </Row>  
            <Row>
            <Col >
               
            <span className="mr" style={{color:"white"}}>  hireable : </span>
                <span style={{color:"gray"}}> ' </span>
                <span style={{color:"green"}}> TRUE </span>
                <span style={{color:"gray"}}> ' </span>
              
            </Col> 
            </Row>   
            <Row>
            <Col >
               
            <span className="mr" style={{color:"white"}}>  {`}`} </span>
                
              
            </Col> 
            </Row> 
            <Row>
                <Col>

                 
              <p className="rainbow-text ">
          Programming is a journey, not a destination👌<br/>
          Enjoy the process."<br/> 
          Every line of code you write is a step towards mastering your craft and every bug that you meet will empower your experience.<br/> 
          Good programming blends creativity and logic to craft efficient, scalable solutions.
          </p>
                </Col>
            </Row>  
           

                
             </Container>

               

       
        </>
    );




}

export default About_JSON;