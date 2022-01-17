import { Container, Row, Col } from "react-bootstrap";
import Template from "./Template";
import {BsFillPencilFill} from 'react-icons/bs'

const About = () => {
  return (
    <div>
      <Template
        title={<p>About</p>}
        icon={<BsFillPencilFill />}
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
