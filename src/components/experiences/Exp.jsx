import {Col, Row} from 'react-bootstrap'

const Exp = (props) => {
    return ( 
        <Row>

<Col md={2}>
  <img
    src="https://media-exp1.licdn.com/dms/image/C560BAQHlZSKLDMyuUA/company-logo_200_200/0/1519856155971?e=1650499200&v=beta&t=WHaxAKTLQLbhNG7tzOIGUMSlHIgS0AtGqoj3zj_dE5k"
    width={"100px"}
  />
</Col>
<Col className="">
  <h5 className="experience-role text-left p-0">Student</h5>
  <p className="experience-company text-left p-0">
    Company: {props.company} - Role: {props.role}
  </p>
  <p className="experience-dates text-left p-0">
    {props.startDate} - {props.endDate}
  </p>
  <p className="experience-dates text-left p-0">
    Location: {props.area}
  </p>
</Col>
        
        
          </Row>
     );
}
 
export default Exp;