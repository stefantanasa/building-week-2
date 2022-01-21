import Template from "../about/Template";
import { BsPlusLg } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { Container,Alert, Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import { useEffect, useState } from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import ModuleComp from "../newsfeed/ModuleComp";

const Experiences = () => {
  let [hideForm, setHideForm] = useState("");
  let [experience, setExperience] = useState([]);
  let [beforeSubmit, setBeforeSubmit] = useState({

  });
 
  let [hasPosted,setHasPosted] = useState("d-none")

  let handleInputs = (property, value) => {
    setBeforeSubmit({
      ...beforeSubmit,
      [property]: value,
    });
  };


  let hide = () => {
    if (hideForm === "") {
      setHideForm("d-none");
    } else if (hideForm === "d-none") {
      setHideForm("");
    }
  };

  //handle submit
  let handleSubmit = async (e) => {
    
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/61e54cf173d5cb0015395aa2/experiences",
        {
          method: "POST",
          body: JSON.stringify(beforeSubmit),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        experience.append(data);
        setHasPosted("")
        
      
                     
       
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
          let data = await response.json();

          setExperience(data);
          console.log("From fetch:", experience);
        } else {
          console.log("error while fetching");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  let [oneExp, setOneExp] = useState({});

  let getId = async (id) => {
    fetchOneExp(id);
  };

  let fetchOneExp = async (e) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/61e54cf173d5cb0015395aa2/experiences/" +
          e,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("One experience: ", data);
        setOneExp(data);
      } else {
        console.log("error while fetching (One");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let fetchDelOneExp = async (e, id) => {
    getId(id)
    e.preventDefault()
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/61e54cf173d5cb0015395aa2/experiences/" + id,
        {
          method: "DELETE",
          body: JSON.stringify(oneExp),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
          },
        }
      );
      if (response.ok) {
 
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="bg-light rounded border border-2 my-3">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start  my-2">
              <p>Experieces</p>
        
            </Col>

            <Col className="d-flex justify-content-end  my-2">
              <ModuleComp
                popUp={
                  <BsPlusLg style={{ cursor: "pointer" }}  />
                }
                content={
                  <Row>
                    <Col>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            value={experience.role}
                            onChange={(e) =>
                              handleInputs("role", e.target.value)
                            }
                            placeholder="Position"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            value={experience.company}
                            onChange={(e) =>
                              handleInputs("company", e.target.value)
                            }
                            placeholder="Company name"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="date"
                            value={experience.startDate}
                            onChange={(e) =>
                              handleInputs("startDate", e.target.value)
                            }
                            placeholder="Start Date"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="date"
                            value={experience.endDate}
                            onChange={(e) =>
                              handleInputs("endDate", e.target.value)
                            }
                            placeholder="End Date"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="textarea"
                            value={experience.description}
                            onChange={(e) =>
                              handleInputs("description", e.target.value)
                            }
                            placeholder="Add an description"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            value={experience.area}
                            onChange={(e) =>
                              handleInputs("area", e.target.value)
                            }
                            placeholder="Location. Example:London, UK"
                          />
                        </Form.Group>
                        <Button className="btn   m-2" type="submit">
                          Submit
                        </Button>
                        {
                          <Alert  className={hasPosted} variant={"success"}>
                          Your post has been posted!
                          </Alert>
                        }
                      </Form>
                    </Col>
                  </Row> 
                }
                title={"Add experience"}
              />
            </Col>
          </Row>

          <Row>
            <Col>
            {
              console.log("from body: ", experience)
            }
              {experience.map((ex) => (
                <>
                  <ExperienceTemplate




                  pencil= {<BsFillPencilFill height={"10px"} className='pencil' onClick={getId}/>}
                  edit={()=> console.log( "pencil was clicked")}
                    delete={(e) => fetchDelOneExp(e, ex._id)}
                    role={ex.role}
                    company={ex.company}
                    startDate={ex.startDate}
                    endDate={ex.endDate}
                    area={ex.area}
                    description={ex.description}
                    key={ex._id}
                  />

                </>
              ))}
              {/* 
            {experience[0].role ==="" ? console.log("role is emplty and the id is", experience[0]._id) : experience.map((exp) => (
                <>
                  <ExperienceTemplate
                    role={exp.role}
                    company={exp.company}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    area={exp.area}
                    description={exp.description}
                    key={exp._id}
                    
                    
                  />
                </>
              ))} */}
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Template
          title={"Experiences"}
          content={
            <Container>
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

              <Row></Row>
            </Container>
          }
        />
      </Row>
    </Container>
  );
};

export default Experiences;
