import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import TopMiddle from "./TopMiddle";

const MiddlePart = (props) => {
  return (
    <Container className="rounded-lg ">
      <TopMiddle profilePicture={props.profilePicture} />
      
      <Post
        profilePicture={props.profilePicture}
        name={props.name}
        surname={props.surname}
        postPhoto={"https://images.unsplash.com/photo-1642478862237-3eafc24f32b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"}
      />
      <Post
        profilePicture={props.profilePicture}
        name={props.name}
        surname={props.surname}
        postPhoto = "https://images.unsplash.com/photo-1642478862237-3eafc24f32b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"
      />
    </Container>
  );
};

export default MiddlePart;
