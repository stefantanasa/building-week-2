import Template from "../about/Template";
import { BsFillPencilFill } from "react-icons/bs";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const Experiences = (props) => {
  let [method, setMethod] = useState("POST");

  let [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  //   let displayForm = () => {

  //     if (displayClass === "d-none") {
  //       setDisplayClass(" ");
  //     } else if (displayClass === "d-none") {
  //       setDisplayClass(" ");
  //     } else {
  //       console.log("There is something wrong in the displayForm fct");
  //     }
  //   };

  let handleInputs = (property, value) => {
    setExperience({
      ...experience,
      [property]: value,
    });
    console.log(experience);
  };

  let [hideForm, setHideForm] = useState("")

  let hide = ()=>{
      if (hideForm === "") {
          setHideForm("d-none")
      }else if (hideForm === "d-none"){
          setHideForm("")
      }
  }


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/61e54cf173d5cb0015395aa2/experiences",
          {
            method: "POST",
            body: JSON.stringify(experience),
            headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
              },
          }
        );
        if (response.ok) {
           let data = await response.json();
           setExperience({
            ...data
           })
          console.log(experience);
        } else {
          console.log("error while fetching");
        }
      } catch (e) {
        console.log(e);
      }
  };

  let fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/61e54cf173d5cb0015395aa2/experiences",
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
        setExperience({
            ...data
           })
           console.log(experience)
       
        console.log("");
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };



  useEffect(() => {
    
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Template
          title={"Experiences"}
          icon={<BsFillPencilFill style={{cursor: "pointer"}}  onClick={hide}/>}
          content={
            <Container>

                
<Row className="">
<Col md={2}>
  <img
    src="https://media-exp1.licdn.com/dms/image/C560BAQHlZSKLDMyuUA/company-logo_200_200/0/1519856155971?e=1650499200&v=beta&t=WHaxAKTLQLbhNG7tzOIGUMSlHIgS0AtGqoj3zj_dE5k"
    width={"100px"}
  />
</Col>
<Col className="">
  <h5 className="experience-role text-left p-0">Student</h5>
  <p className="experience-company text-left p-0">
    Company: { props.company} 
  </p>
  <p className="experience-dates text-left p-0">
    Start: {props.expStart} - End {props.expEnd}{" "}
  </p>
  <p className="experience-dates text-left p-0">
    Start: {props.expStart} - End {props.expEnd}{" "}
  </p>
</Col>
</Row>


{/* {

  

experience.length === 0 ? console.log("NO ITEMS"):  experience.map(exp => 

<Row className="">
<Col md={2}>
  <img
    src="https://media-exp1.licdn.com/dms/image/C560BAQHlZSKLDMyuUA/company-logo_200_200/0/1519856155971?e=1650499200&v=beta&t=WHaxAKTLQLbhNG7tzOIGUMSlHIgS0AtGqoj3zj_dE5k"
    width={"100px"}
  />
</Col>
<Col className="">
  <h5 className="experience-role text-left p-0">Student</h5>
  <p className="experience-company text-left p-0">
    Company: { exp.role} 
  </p>
  <p className="experience-dates text-left p-0">
    Start: {props.expStart} - End {props.expEnd}{" "}
  </p>
  <p className="experience-dates text-left p-0">
    Start: {props.expStart} - End {props.expEnd}{" "}
  </p>
</Col>
</Row>

)} */}


               

              <Form className={hideForm} onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.role}
                    onChange={(e) => handleInputs("role", e.target.value)}
                    required
                    placeholder="Student"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.company}
                    onChange={(e) => handleInputs("company", e.target.value)}
                    required
                    placeholder="Company"
                  />
                </Form.Group>
                <Form.Group
                  required
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                    type="date"
                    value={experience.startDate}
                    onChange={(e) => handleInputs("startDate", e.target.value)}
                    required
                    placeholder="Start"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>End</Form.Label>
                  <Form.Control
                    type="date"
                    value={experience.endDate}
                    onChange={(e) => handleInputs("endDate", e.target.value)}
                    placeholder="Start"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="textarea"
                    value={experience.description}
                    onChange={(e) =>
                      handleInputs("description", e.target.value)
                    }
                    required
                    placeholder="Learning stuff"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.area}
                    onChange={(e) => handleInputs("area", e.target.value)}
                    required
                    placeholder="London, UK"
                  />
                </Form.Group>
                <Button className="btn   m-2" type="submit">
                  Submit
                </Button>
                <Button className="btn btn-success m-2" type="submit">
                  Edit
                </Button>
                <Button className="btn btn-danger m-2" type="submit">
                  Delete
                </Button>
              </Form>

              <Row></Row>
            </Container>
          }
        />
      </Row>
    </Container>
  );
};

export default Experiences;
