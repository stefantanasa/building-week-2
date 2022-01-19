import { Col, Container, Row } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { GrSend } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiShare } from 'react-icons/bi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import PillButton from "./PillButton";

const Post = (props) => {
  return (
    <Container className="border rounded">
      <Row>
        <Col className="d-flex">
        <p>
        John and Chris liked this post
        </p>
        </Col>
        <Col md={1} ><HiOutlineDotsHorizontal /></Col>
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

        <Col md={4} className="follow"> <BsPlusLg /> follow</Col>
      </Row>
      <Row >
           <div className="post-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis rerum eos eaque aut nemo fugit incidunt iure sint labore!
          </div> 
          </Row>
      <Row> 
          
    <img width={"100%"} src="https://images.unsplash.com/photo-1642478862237-3eafc24f32b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80" alt="img post" />

     </Row>
      <Row>
        <Col md={4}>reactions</Col>
        <Col md={8}> 300 comments 400,000 views</Col>
      </Row>
      <Row className="p-2 d-flex justify-content-between"> 
          <PillButton reaction={"Angry"} />
          <PillButton reaction={"Do it"} />
          <PillButton reaction={"Love it"} />
          <PillButton reaction={"Angry"} />
          <PillButton reaction={"mneah.."} />
          <PillButton reaction={"Huoo"} />
     </Row>
      <Row>
        <Col>
        <AiFillLike/>like
        </Col>
        <Col><FaRegCommentDots/> comment</Col>
        <Col><BiShare/> share</Col>
        <Col><GrSend/> send</Col>
      </Row>
      <Row>
        <Col md={3}> <img
            className="rounded-circle"
            src={props.profilePicture}
            alt="profile picture"
            style={{ height: "60px", width: "60px" }}
          /></Col>
        <Col>
        <div className="form-group rounded-pill">
    
    <textarea className="form-control rounded-pill" id="exampleFormControlTextarea1" placeholder="Write a comment..." rows="2"></textarea>
  </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
