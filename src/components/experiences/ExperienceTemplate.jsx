import {Col, Row} from 'react-bootstrap'
import { BsFillPencilFill } from "react-icons/bs";

const ExperienceTemplate = (props) => {
    return ( 
                        
<Row  >
<Col md={2} className="mr-1">
  <img 
    src={
      props.image ||
      "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"  
    }
      width={"100px"}
    
  />
</Col>
<Col className="">
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
<Col md={1}>
    <BsFillPencilFill height={"10px"} className='pencil'/>
</Col>
</Row>
     );
}
 
export default ExperienceTemplate;