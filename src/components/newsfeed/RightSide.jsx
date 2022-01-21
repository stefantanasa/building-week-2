import './RightSide.css'
import { BsFillInfoSquareFill } from "react-icons/bs"
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"


const RightSide = () => {
  return (
    <div>
      <section className="feed-recommendation card py-2">
        <div className="d-flex justify-content-between card-body">
          <p className="font-weight-bold">Add to your feed</p>
          <BsFillInfoSquareFill color="grey"/>
        </div>
        <div className="mx-2 my-1">
          <div className="d-flex w-100 my-4 justify-content-between">
            <div style={{width: "30%"}} >
              <img className="mr-5"  src={"https://pbs.twimg.com/profile_images/981123800757690368/8kBX4yBv_400x400.jpg"} alt="Profile Picture" width={"100%"} style={{borderRadius: "50%"}} />
            </div>
            <div className="d-flex flex-column align-items-start ml-2" style={{width: "700%"}}>
              <p className="font-weight-bold" style={{lineHeight: "0px"}}>Rafal Brzoska</p>
              <small className="mr-5">CEO / Shareholder</small>
              <Button variant="outline-secondary font-weight-bold w-90 mt-2" style={{borderRadius: "20px"}}><BsPlusLg /> Follow</Button>
            </div>
          </div>
          <div className="d-flex w-100 my-4 justify-content-between">
            <div style={{width: "30%"}} >
              <img className="mr-5"  src={"https://pbs.twimg.com/profile_images/1429514842919026696/xR_2GuLs_400x400.jpg"} alt="Profile Picture" width={"100%"} style={{borderRadius: "50%"}} />
            </div>
            <div className="d-flex flex-column align-items-start ml-2" style={{width: "700%"}}>
              <p className="font-weight-bold" style={{lineHeight: "0px"}}>Niebezpecznik.pl</p>
              <small className="mr-5">Computer & Network Security</small>
              <Button variant="outline-secondary font-weight-bold w-90 mt-2" style={{borderRadius: "20px"}}><BsPlusLg /> Follow</Button>
            </div>
          </div>
          <div className="d-flex w-100 my-2 justify-content-between">
            <div style={{width: "30%"}} >
              <img className="mr-5"  src={"https://pbs.twimg.com/profile_images/568455865900863488/T_xYwZyx_400x400.jpeg"} alt="Profile Picture" width={"100%"} style={{borderRadius: "50%"}} />
            </div>
            <div className="d-flex flex-column align-items-start ml-2" style={{width: "700%"}}>
              <p className="font-weight-bold" style={{lineHeight: "0px"}}>Huncwot</p>
              <small className="mr-5">Marketing Service</small>
              <Button variant="outline-secondary font-weight-bold w-90 mt-2" style={{borderRadius: "20px"}}><BsPlusLg /> Follow</Button>
            </div>
          </div>
          <div>
            <small className="text-center text-muted">View all recommendations <AiOutlineArrowRight /></small>
          </div>
        </div>
      </section>
      <footer className="footer-links">
        <div>
          <small>About</small>
          <small>Accessibility</small>
          <small>Help Center</small>
          <small>Privacy & Policy</small>
          <small>Ad Choice</small>
          <small>Business services</small>
          <small>Get the LinkedIn App</small>
          <small>More</small>
        </div>
        <div>
          <small>Linkedin Corporation &copy; 2022</small>
        </div>
      </footer>
    </div>
  );
};

export default RightSide;
