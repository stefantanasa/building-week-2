import { useState } from "react";
import {Row, Col } from 'react-bootstrap'

const TextareaPost = () => {


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

              </Row  >

        <Row className="d-flex justify-content-end mr-3 mt-2" >

                <button type="submit" className="btn btn-primary  ">
                  Post
                </button>
        </Row>

              
            </form>
     );
}
 
export default TextareaPost;