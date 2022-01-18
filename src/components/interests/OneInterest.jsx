import { Container, Col, Row } from "react-bootstrap";

const OneInterest = (props) => {
  return (
    
      <Row className="m-1">
        <Col md={2}>
          <img src={props.logo} style={{ height: "5rem" }} />
        </Col>
        <Col col={10}>
          
            <div className="float-left ml-5">{props.name}
              <h6>{props.folowers + " folowers"}</h6>
            </div>
          
        </Col>
      </Row>
 
  );
};

export default OneInterest;
