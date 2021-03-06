import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage";
import NewsfeedPage from "./components/pages/NewsfeedPage";
import { useState, useEffect } from "react";
import Error404 from "./components/errors/Error404";

function App() {
  let [profilePicture, setProfilePicture] = useState("");
  let [name, setName] = useState("name");
  let [surname, setSurname] = useState("surname");
  let [email, setEmail] = useState("email");

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
          console.log("Profile info:", data);
          setProfilePicture(data.image);
          setName(data.name);
          setSurname(data.surname);
          setEmail(data.email);
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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/newsfeed"
            element={
              <NewsfeedPage
                profilePicture={profilePicture}
                name={name}
                surname={surname}
                email={email}
              />
            }
          />
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>

      {/* <Container>
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
      </Container> */}
    </div>
  );
}

export default App;
