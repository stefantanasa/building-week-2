import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Profile from "./components/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";

import Skills from "./components/skills/Skills";

import Interests from "./components/interests/Interests";
import Activity from "./components/activity/Activity";
import Accomplishments from "./components/accomplishments/Accomplishments";
import Causes from "./components/causes/Causes";
import Experiences from "./components/experiences/Experiences";

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
            <Experiences />
            <Skills />
            <Accomplishments />
            <Interests />
            <Causes name={"Stefan"} surname={"Tanasa"} />
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
