import { Container, Row, Col } from "react-bootstrap";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

const TopMiddle = (props) => {
  return (
    <div className="border rounded my-2">
      <Row className="p-3">
        <Col md={2}>
          <img
            className="rounded-circle"
            src={props.profilePicture}
            alt="profile picture"
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
        <Col md={10}>
          <div className="form-group rounded-pill">
            <textarea
              className="form-control rounded-pill"
              id="exampleFormControlTextarea1"
              placeholder="Write a post..."
              rows="2"
            ></textarea>
          </div>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          <MdInsertPhoto className="pencil" />
        </Col>
        <Col>
          <MdOutlineOndemandVideo className="pencil" />
        </Col>
        <Col>
          <BsCalendarEvent className="pencil" />
        </Col>
        <Col>
          <MdArticle className="pencil" />
        </Col>
      </Row>
    </div>
  );
};

export default TopMiddle;
