import React from "react";
import { Nav } from 'react-bootstrap';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

class TopSidebar extends React.Component {
  render() {
    return (
      <>
        <Nav className="topsidebar flex-column mt-3">
          <div className="d-flex border ">
            <div className=" py-2 px-2"> Edit public profile </div>
            <div className=" py-2 px-2 ml-auto"><BsFillQuestionCircleFill/></div>
          </div>
          <div className="d-flex mt-2 border">
            <div className=" py-2 px-2"> Add profile in another language </div>
            <div className=" py-2 px-2 ml-auto"> <BsFillQuestionCircleFill/> </div>
          </div>
        </Nav>
      </>
    );
  }
}
export default TopSidebar;
