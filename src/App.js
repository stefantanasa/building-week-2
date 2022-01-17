import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Jumbotron from "./components/profile/Jumbotron";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8}>
            <Jumbotron />
          </Col>
          <Col sx={4}>
            <h1>Sidebar</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
