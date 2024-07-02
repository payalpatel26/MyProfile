import React,{useRef,useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  

  return (
    <div  style={{width:"90%",paddingTop:"5px" ,margin:"5px" }}>
    <Card className="project-card-view" >
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
 
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" ,wordSpacing: "-1px" ,maxwidth:"300px",maxHeight:"400px", overflowX:"auto"}}>
         {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {/* {"\n"}
        {"\n"} */}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
    </div>
  );
}
export default ProjectCards;
