import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import TextareaPost from "./TextareaPost";


const ModuleComp = (props) => {
    const [show, setShow] = useState(false);
    return ( 

        <>
        <div onClick={() => setShow(true)}>
          {props.popUp}
        </div>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              props.content
            }
            
          </Modal.Body>
        </Modal>
      </>


        
     );
}
 
export default ModuleComp;

