import { Container, Row ,Col} from "react-bootstrap";

const MiddlePart = (props) => {
    return ( 
        <Container className="border rounded-lg">
            <h2>Middle part</h2>
            <Row >
                <Col md={2}>

                
                    <img className="rounded-circle" src={props.profilePicture} alt="profile picture" style={{height:"60px", width: "60px"}} />
                    
                    

                </Col>
                <Col md={10}>

                <div className="form-group rounded-pill">
    
    <textarea className="form-control rounded-pill" id="exampleFormControlTextarea1" rows="2"></textarea>
  </div>
                </Col>
            </Row>
            <Row>
                <Col>
                picture
                </Col>
                <Col>
                video
                </Col>
                <Col>
                event
                </Col>
                <Col>
                write article
                </Col>
            </Row>
        </Container>

     );
}
 
export default MiddlePart;