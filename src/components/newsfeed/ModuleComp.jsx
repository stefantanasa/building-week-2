import { Modal , Button} from "react-bootstrap"
import { useState } from "react";


const ModuleComp = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return ( 
<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
              {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

     );
}
 
export default ModuleComp;