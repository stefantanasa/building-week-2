import Template from "../about/Template";
import { BsFillPencilFill } from "react-icons/bs";
import {Button, Container, Row, Col } from "react-bootstrap";
import OneInterest from "./OneInterest";

const Interests = () => {
  let list = [1, 2, 3, 4, 5, 6];
  return (
    <Template
      title={"Interests"}
      icon={<BsFillPencilFill />}
      content={
        <Container>
            <Row>

              <OneInterest
                name={"Middlesex University"}
                folowers="100,000"
                logo={"https://via.placeholder.com/150/"}
              />
              <OneInterest
                name={"Middlesex University"}
                folowers="100,000"
                logo={"https://via.placeholder.com/150/"}
              />
              <OneInterest
                name={"Middlesex University"}
                folowers="100,000"
                logo={"https://via.placeholder.com/150/"}/>
            </Row>
             
              
         
            <Button variant="secondary " style={{width: "100%"}}>See All </Button>
         </Container>
      }
    />
  );
};

export default Interests;
