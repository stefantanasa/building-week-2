import { Container, Row, Col } from "react-bootstrap";
import Template from "./Template";
import {BsFillPencilFill} from 'react-icons/bs'
import ModuleComp from "../newsfeed/ModuleComp";

const About = () => {
  return (
    <div>
      <Template
        title={<p>About</p>}
        icon={<ModuleComp title={"Write something about you"} 
        content={
 
 <form>
   <div class="form-group">
 
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     <small id="emailHelp" class="form-text text-muted">Write something about you</small>
   </div>
   
   <button type="submit" class="btn btn-primary">Edit</button>
 </form>
        } 
        
        popUp={<BsFillPencilFill />}
        />}
        content={
          <p className="pl-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lore
          </p>
        }
      />

      




    </div>
  );
};

export default About;
