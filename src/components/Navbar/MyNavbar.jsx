import React from "react";
import "./MyNavbar.css";
import {
  Container,
  Navbar,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,Button
} from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RiGridFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="container ">
        <Navbar sticky="top" className="container" variant="white">
          <Row>
            <Col>
              <Navbar.Brand href="#">
                <Link to="/newsfeed">
                  <img className="navlogo" src="linkedin-new.png" alt="" />
                </Link>
              </Navbar.Brand>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form inline>
                <BsSearch className="searchi" />
                <FormControl
                  type="text"
                  placeholder="search"
                  className="input "
                />
              </Form>
            </Col>
          </Row>
          <Container className="icon-container">
            <Row>
              <Col>
                <div>
                  <Link to="/newsfeed">
                    <AiFillHome className="iconsinnav" />
                  </Link>
                  <Nav.Link className="textss">Home</Nav.Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <BsFillPeopleFill className="iconsinnav" />
                  <Nav.Link className="textss">Network</Nav.Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <FaSuitcase className="iconsinnav" />
                  <Nav.Link className="textss">Jobs</Nav.Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <IoChatboxEllipses className="iconsinnav" />
                  <Nav.Link className="textss">Messaging</Nav.Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <IoNotifications className="iconsinnav" />
                  <Nav.Link className="textss">Notification</Nav.Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <Link to="/me">
                    <IoPerson className="iconsinnav" />
                  </Link>
                  <NavDropdown
                    className="textss"
                    title="me"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <IoPersonCircleOutline className="iconsinnav" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                     
                    <Link to="/">
                  
                <Button className="profile-button"variant="light">Profile</Button>{" "}</Link>
                    </NavDropdown.Item>
                   
                  </NavDropdown>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="vl"></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <RiGridFill className="iconsinnav" />
                  <NavDropdown
                    className="textss"
                    title="Work"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <h6 className="textsss">Try premium for free</h6>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default MyNavbar;
