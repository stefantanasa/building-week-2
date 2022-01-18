import { Container, Row, Col } from "react-bootstrap";
import Template from "../about/Template";
import { AiOutlinePlus } from "react-icons/ai";

const Accomplishments = () => {
  return (
    <Template
      title={"Accomplishments"}
      icon={<AiOutlinePlus />}
      content={
        <Container>
          <Row>
            <Col>
              <li class="list-group-item">An item</li>
            </Col>
          </Row>
          <Row>
            <Col>
              <li class="list-group-item">An item</li>
            </Col>
          </Row>
        </Container>
      }
    />
  );
};

export default Accomplishments;
