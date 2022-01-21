import { useState } from "react";
import {Row, Col, Alert } from 'react-bootstrap'

const TextareaPost = () => {

  let [hasPosted,setHasPosted] = useState("d-none")
    let [post, setPost] = useState([
        {
          text: "starting text",
        },
      ]);
      let [beforeSubmit, setBeforeSubmit] = useState({
        text: "",
      });
    
      let handleInputs = (property, value) => {
        setBeforeSubmit({
          ...beforeSubmit,
          [property]: value,
        });
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
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NGNmMTczZDVjYjAwMTUzOTVhYTIiLCJpYXQiOjE2NDI0MTczOTQsImV4cCI6MTY0MzYyNjk5NH0.BOYfYGGB52eViSSMJgOdkm2UU07TAQm8j6NPZ352yRA",
              },
            }
          );
          if (response.ok) {
            let data = await response.json();
            setPost({
              ...data,
            });
            console.log(post);
            setHasPosted("")
            
            
          } else {
            console.log("error while fetching");
          }
        } catch (e) {
          console.log(e);
        }
      };

    return ( 
        <form onSubmit={handleSubmit}>
              <Row>
                <textarea
                  className="form-control rounded-pill"
                  id="exampleFormControlTextarea1"
                  placeholder="Write a post..."
                  rows="2"
                  onChange={(e) => handleInputs("text", e.target.value)}
                ></textarea>
{
   <Alert  className={hasPosted} variant={"success"}>
   Your post has been posted!
   </Alert>
   
}
              </Row  >

        <Row className="d-flex justify-content-end mr-3 mt-2" >

    <Col sm={10}>
    <div class="input-group mb-3 ">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile02"/>
    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose a photo</label>
  </div>
  <div class="input-group-append">
    <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
  </div>
</div>
    </Col>
<Col sm={2}>
                <button type="submit" className="btn btn-primary  ">
                  Post
                </button>
</Col>
        </Row>

              
            </form>
     );
}
 
export default TextareaPost;