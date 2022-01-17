import Template from "../about/Template";
import { Button, Row, Col, Container, ListGroup } from "react-bootstrap";
import { BsFillPencilFill,BsArrowDownShort } from "react-icons/bs";
import RoundButton from "../profile/RoundButton";

const Skills = () => {
  return (
    <Template
      title="Skills & endorsements"
      icon={
        <div className="d-flex align-items-center">
          <Button variant="light">Start a post</Button>
          <BsFillPencilFill />
        </div>
      }
      content={
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <RoundButton text={"Take Skill quiz"} color={"primary"} />
            </Col>
          </Row>
          <Row>
            <Col >
              <ListGroup variant="flush"  style={{width: "100%"}}  >
                <ListGroup.Item className="d-flex justify-content-start">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-start">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-start">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-start">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
              <Button variant="secondary " style={{width: "100%"}}>Show more <BsArrowDownShort/></Button>
          </Row>
        </Container>
      }
    />
  );
};

export default Skills;
