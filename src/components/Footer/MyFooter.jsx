import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
import { BsQuestionCircleFill } from "react-icons/bs";
import {RiSettings4Fill} from "react-icons/ri";

class MyFooter extends React.Component {
  render() {
    return (
      <div className="container">
        <footer className="footer">
          <Row>
            <Col md={3}>
              <h6>About</h6>
              <h6>Community Guidelines</h6>
              <h6>Privacy and Terms</h6>
              <h6>Sales Solutions</h6>
              <h6>Safety Centers</h6>
            </Col>
            <Col md={2}>
              <h6>Accesibility</h6>
              <h6>Careers</h6>
              <h6>Ad Choices</h6>
              <h6>Mobile</h6>
            </Col>
            <Col md={3}>
              <h6>Team Solutions</h6>
              <h6>Marketing Solutions</h6>
              <h6>Advertising</h6>
              <h6>Small Business</h6>
            </Col>
            <Col md={3}>
              <div>
                <div className="d-flex ">
                  <BsQuestionCircleFill className="iconssmini" />
                  <h5 className="ml-2">Questions?</h5>
                </div>
                <h6>Visit our Help Center</h6>
              </div>
              <div>
                <div className="d-flex ">
                  <RiSettings4Fill className="iconss" />
                  <h5 className="ml-2">Manage your account and privacy</h5>
                </div>
                <h6>Go to your Settings</h6>
              </div>
            </Col>
            <Col md={1}>dropdown goes here</Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default MyFooter;
