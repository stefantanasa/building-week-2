import { Container, Row ,Col} from "react-bootstrap";
import { MdInsertPhoto } from 'react-icons/md';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { BsCalendarEvent } from 'react-icons/bs';
import { MdArticle } from 'react-icons/md';
import { useState } from "react";

const TopMiddle = (props) => {




    let [post, setPost] = useState([
        {
          text:"starting text"
          
          
        },
      ]);
    let [beforeSubmit, setBeforeSubmit] = useState({
  
        text: ""
    })
    
      let handleInputs = (property, value) => {
        setBeforeSubmit({
          ...beforeSubmit,
          [property]: value,
        }
        );
        
      
      };
    

    
      let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/posts/",
            {
              method: "POST",
              body: JSON.stringify(beforeSubmit),
              headers: {
                'Content-Type': 'application/json',
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
              },
            }
          );
          if (response.ok) {
            let data = await response.json();
            setPost({
              ...data
              
            });
            console.log(post);
          } else {
            console.log("error while fetching");
          }
        } catch (e) {
          console.log(e);
        }
      };




    return ( 
        <div className="border rounded my-2">

            <Row className="p-3">
                <Col md={2}>

                
                    <img className="rounded-circle" src={props.profilePicture} alt="profile picture" style={{height:"60px", width: "60px"}} />
                    
                    

                </Col>
                <Col md={10}>

                <div className="form-group rounded-pill">

               <form onSubmit={handleSubmit} >
                <div className="form-group">
    <textarea 
    className="form-control rounded-pill"
     id="exampleFormControlTextarea1"
      placeholder="Write a post..." rows="2"
      onChange={(e) => handleInputs("text", e.target.value)}
      >
    </textarea>
    <button type="submit" className="btn btn-primary" >Post</button>
    
    </div>
                   </form>     
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
}
 
export default TopMiddle;