import { Button } from "react-bootstrap";
const PillButton = (props) => {
  return (
    <>
      <Button className="rounded-pill " variant="light" size="sm" active>
        {props.reaction}
      </Button>
    </>
  );
};

export default PillButton;
