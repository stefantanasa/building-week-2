import { Container, Row, Col } from "react-bootstrap";

const Template = (props) => {
  return (
    <Container className="bg-light rounded border border-2 my-3">
      <Row>
        <Col className="d-flex justify-content-start p-3">{props.title}</Col>
        <Col className="d-flex justify-content-end p-3">{props.icon}</Col>
      </Row>
      <Row className="d-flex justify-content-start ">{props.content}</Row>
    </Container>
  );
};

export default Template;
