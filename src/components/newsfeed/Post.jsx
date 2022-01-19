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
    <Container className="border rounded my-3">
      <Row>
        <Col className="d-flex">
        <p>
        John and Chris liked this post
        </p>
        </Col>
        <Col sm={1} ><HiOutlineDotsHorizontal /></Col>
      </Row>
      <Row>
        <Col sm={2}>
          <img
            className="rounded-circle"
            src={props.profilePicture}
            alt="profile picture"
            style={{ height: "50px", width: "50px" }}
          />
        </Col>

        <Col sm={6}>
          <Row>{props.name + " " + props.surname}</Row>
          <Row>Job title</Row>
        </Col>

        <Col sm={4} className="follow"> <BsPlusLg /> follow</Col>
      </Row>
      <Row >
           <div className="post-description p-2">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis rerum eos eaque aut nemo fugit incidunt iure sint labore!
          </div> 
          </Row>
      <Row> 
          
    <img width={"100%"} src={props.postPhoto} alt="img post" />

     </Row>
      <Row>
        <Col sm={4}>reactions</Col>
        <Col sm={8}> 300 comments 400,000 views</Col>
      </Row>
      <Row className="p-2 d-flex justify-content-between"> 
          <PillButton reaction={"Angry"} />
          <PillButton reaction={"Do it"} />
          <PillButton reaction={"Love it"} />
          <PillButton reaction={"Angry"} />
          <PillButton reaction={"mneah.."} />
          <PillButton reaction={"Huoo"} />
     </Row>
      <Row className="pb-2 ">
        <Col className="reacts-buttons d-flex justify-content-center align-items-center">
        <AiFillLike/>like
        </Col>
        <Col className="reacts-buttons d-flex justify-content-center align-items-center"><FaRegCommentDots/> comment</Col>
        <Col className="reacts-buttons d-flex justify-content-center align-items-center"><BiShare/> share</Col>
        <Col className="reacts-buttons d-flex justify-content-center align-items-center"><GrSend/> send</Col>
      </Row>
      <Row>
        <Col sm={3}> <img
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
