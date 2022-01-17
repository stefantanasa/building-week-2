import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import RoundButton from "./RoundButton";

const Jumbotron = () => {
  let [name, setName] = useState("name");
  let [surname, setSurname] = useState("surname");
  let [email, setEmail] = useState("email");
  let [profilPicture, setProfilePicture] = useState(
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  let [bio, setBio] = useState(" ");
  let [location, setLocation] = useState(" ");

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProfilePicture(data.image);
          setBio(data.bio);
          setLocation(data.area);
        } else {
          console.log("error while fetching");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="bg-light rounded rounded-2 border border-1">
      <Row className="profile-cover" style={{ height: "15rem" }}>

          <Col
            md={2}
            className="d-flex justify-content-center align-items-end"
            
          >
              </Col>

            <Col className="d-flex align-items-end justify-content-start">
            <img
              className="rounded-circle profile-picture "
              src={profilPicture}
              alt="profile picture"
            />
            </Col>

        
      </Row>
      <Row className="px-3">
        <Col md={7} className="">
          <Row>
            <p className="bio">{bio}</p>
          </Row>
          <Row>
            <p>{location}</p>
            <span className="contact-info">- Contact Info</span>
          </Row>
          <Row>
            <p>50 connections</p>
          </Row>
        </Col>
        <Col
          md={4}
          className="d-flex align-items-start pt-4 justify-content-center"
        >
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1650499200&v=beta&t=mloP18Niezg5N-k-LGhNL_bZk13RTZyY9PgVGKDUOrs"
            alt="school image"
            height={"50rem"}
          />
          <p>Strive School</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-start py-2">
          <RoundButton />
          <RoundButton />
          <RoundButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;
