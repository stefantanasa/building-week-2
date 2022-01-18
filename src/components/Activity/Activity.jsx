import Template from "../about/Template";
import { Button,Container, Row, Col } from "react-bootstrap";

const Activity = () => {
  return (
    <Template
      title={
        <span>
          <p>Activity</p>
        </span>
      }
      icon={<Button variant="light">Start a post</Button>}
      content={
          <Container>
              <Row>
                <p className="pl-3">
                  Posts you created, shared, or commented on in the last 90 days are
                  displayed here
                </p>
              </Row>
      <Row >
        <Col className="d-flex justify-content-center p-0">
                <Button variant="secondary " style={{width: "100%"}}>See all activity</Button>
        </Col>
      </Row>
          </Container>
      }
    />
  );
};

export default Activity;
