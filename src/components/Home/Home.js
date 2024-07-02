import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Home1.jpg";
import Particle from "../Particle";
//import Home2 from "./Home2";
import About_JSON from "../Home/About_JSON";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h2 style={{ paddingBottom: 5 }} className="heading">
             
                  <Type /> {" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                  </span>
                  </h2> */}
             
                  
                  <About_JSON/>
              
             
          
            </Col>

            <Col md={5} >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ minHeight: "100%", objectFit: "cover" ,width:"100%" }}
              />

              
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;


//older code

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> Payal Patel</strong>
//               </h1>

//               <div style={{ padding: 5, textAlign: "left" }}>
//                 <Type />
//               </div>
//               <p style={{  color:"white"}}>
//           Programming is a journey, not a destination👌<br/>
//           Enjoy the process."<br/> 
//           Every line of code you write is a step towards mastering your craft and every bug that you meet will empower your experience.<br/> 
//           Good programming blends creativity and logic to craft efficient, scalable solutions.
//           </p>
          
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       {/* <Home2 /> */}
//     </section>
//   );
// }

