import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "../newsfeed/LeftSide";
import MiddlePart from "../newsfeed/MiddlePart";
import RightSide from "../newsfeed/RightSide";
import MyNavbar from "../Navbar/MyNavbar";
import MyFooter from "../Footer/MyFooter";

const NewsfeedPage = (props) => {
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Col md={3}>
          <LeftSide 
            profilePicture={props.profilePicture}
            name={props.name}
            surname={props.surname}
          />
        </Col>
        <Col md={6}>
          {console.log("from newsfeed: ",props.postId)}
          <MiddlePart
            profilePicture={props.profilePicture}
            postId = {props.postId}
            name={props.name}
            surname={props.surname}
            posts = {props.posts}
            submitNewPost={props.submitNewPost}
            
          />
        </Col>
      

        <Col md={3}>
          <RightSide />
        </Col>
      </Row>

      <Row>
        <MyFooter />
      </Row>
    </Container>
  );
};

export default NewsfeedPage;
