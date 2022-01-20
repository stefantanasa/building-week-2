import { Row, Col, Container } from "react-bootstrap";
import About from "../about/About";
import Accomplishments from "../accomplishments/Accomplishments";
import Activity from "../activity/Activity";
import Causes from "../causes/Causes";
import Dashboard from "../dashboard/Dashboard";
import Experiences from "../experiences/Experiences";
import Interests from "../interests/Interests";
import Profile from "../profile/Profile";
import Skills from "../skills/Skills";
import MyNavbar from "../Navbar/MyNavbar";
import MyFooter from "../Footer/MyFooter";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";



const ProfilePage = (props) => {
    return ( 
        <Container>
          <Row>
          <MyNavbar />
          </Row>
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
              <Causes name={propTypes.name} surname={props.surname}/>

export default ProfilePage;
