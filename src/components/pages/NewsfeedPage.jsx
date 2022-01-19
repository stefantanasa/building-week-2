import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "../newsfeed/LeftSide";
import MiddlePart from "../newsfeed/MiddlePart";
import RightSide from "../newsfeed/RightSide";


const NewsfeedPage = (props) => {
    
    return ( 
        <Container>
            <Row>
                <Col md={3}><LeftSide /></Col>
                <Col md={6}><MiddlePart profilePicture={props.profilePicture}                 name={props.name}
                surname={props.surname}  /></Col>
                
                <Col md={3}><RightSide /></Col>
            </Row>
        </Container>
     );
}
 
export default NewsfeedPage;