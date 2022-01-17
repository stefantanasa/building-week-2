import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Profile from "./components/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";
import Activity from "./components/Activity/Activity";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8}>
            <Profile />
            <Dashboard />
            <About />
            <Activity />
            <Skills />
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
