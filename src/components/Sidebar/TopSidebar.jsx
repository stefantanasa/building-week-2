import React from "react";
import { Nav } from 'react-bootstrap';
import { BsFillQuestionCircleFill } from 'react-icons';

class TopSidebar extends React.Component {
  render() {
    return (
      <>
        <Nav className="flex-column">
          <div className="d-flex">
            <div className="nav-link py-4 px-2"> Edit public profile </div>
            <div className="nav-link py-4 px-2"><BsFillQuestionCircleFill/></div>
          </div>
          <div className="d-flex">
            <div className="nav-link py-5 px-2"> Edit public profile </div>
            <div className="nav-link py-4 px-2"> <BsFillQuestionCircleFill/> </div>
          </div>
        </Nav>
      </>
    );
  }
}
export default TopSidebar;
