import './LeftSide.css'
import { BsFillSquareFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs"
import { BsCalendar2Event } from "react-icons/bs"
import { MdOutlineGroups } from "react-icons/md"
const LeftSide = (props) => {
    return ( 
        <div className="left-side-bar">
            <section className="list-group d-flex flex-column align-items-start">
                <div className="side-bar-profile   list-group-item d-flex justify-content-center align-items-center flex-column">
                    <img src={props.profilePicture}  alt="Profile Picture" width={"25%"} style={{borderRadius: "50%"}} />
                     <h6 className="font-weight-bold mt-4" style={{letterSpacing: ".5px", lineHeight: "0px"}}>Stefan Tanasa</h6> 
                     <p>Full Stack Developer (React)</p>  
                </div>
                <div className="list-group-item card-body py-3 side-bar-details d-flex flex-column align-items-start w-100">
                    <div className="d-flex justify-content-between w-100">
                        <p>Who viewed your profile</p>
                        <p>144</p>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                        <p>Views of your post</p>
                        <p>585</p>
                    </div>
                </div>
                <div className="side-bar-plans list-group-item card-body py-2 d-flex flex-column align-items-start w-100">
                    <small>Access exclusive tools & insights</small>
                    <p>
                    <BsFillSquareFill color={'gold'}/>
                    <small className='font-weight-bold'> Try Premium for free</small>
                    </p>
                </div>
                <div className='list-group-item card-body py-2 d-flex align-items-center pb-3 w-100'>
                    <small className='font-weight-bold'><BsFillBookmarkFill width={'2em'}/> My items</small>
                </div>
            </section>
            <section className='card mt-5'>
                <div className='card-body side-bar-recent'>
                    <small>Recent</small>
                    <ul>
                        <li><BsCalendar2Event /> Webiner with SalesRobot</li>
                        <li><MdOutlineGroups /> Employer branding </li>
                        <li><BsCalendar2Event /> dev.js Summit 2022 (online)</li>
                        <li><MdOutlineGroups /> Praca IT</li>
                        <li><MdOutlineGroups /> Front end developers group</li>
                    </ul>
                </div>
                <div className='card-body'>
                <small>Groups</small>
                    <ul>
                        <li><MdOutlineGroups /> Employer branding </li>
                        <li><MdOutlineGroups /> Praca IT</li>
                        <li><MdOutlineGroups /> Front end developers group</li>
                    </ul>
                </div>
                <div className='card-body'>
                    <small>Events</small>
                    <small>Followed Hashtags</small>
                </div>
                <div className='card-body'>
                    <p>Discover more</p>
                </div>
            </section>
        </div>
     );
}
 
export default LeftSide;
