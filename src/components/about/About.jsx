import { Container, Row, Col } from "react-bootstrap";
import Template from "./Template";

const About = () => {
  return (
    <div>
      <Template
        title={<p>About</p>}
        icon={<p>icon</p>}
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
