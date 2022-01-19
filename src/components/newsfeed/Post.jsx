import { Col, Container, Row } from "react-bootstrap";

const Post = (props) => {
  return (
    <Container className="border rounded">
      <Row>
        <Col>What friend liked this post</Col>
        <Col md={1}>More</Col>
      </Row>
      <Row>
        <Col md={3}>
          <img
            className="rounded-circle"
            src={props.profilePicture}
            alt="profile picture"
            style={{ height: "60px", width: "60px" }}
          />
        </Col>

        <Col>
          <Row>{props.name + " " + props.surname}</Row>
          <Row>Job title</Row>
        </Col>

        <Col md={3}>follow</Col>
      </Row>
      <Row >
           <div className="post-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis rerum eos eaque aut nemo fugit incidunt iure sint labore!
          </div> 
          </Row>
      <Row> photo/video </Row>
      <Row>
        <Col md={6}>numbers of reactions</Col>
        <Col md={6}> 300 comments 400,000 views</Col>
        who like it/ nr comments/ nr views{" "}
      </Row>
      <Row> quick reactions x 4 </Row>
      <Row>
        <Col>like</Col>
        <Col>comment</Col>
        <Col>share</Col>
        <Col>send</Col>
      </Row>
      <Row>
        <Col>Profile picture</Col>
        <Col>textarea for comments</Col>
      </Row>
    </Container>
  );
};

export default Post;
