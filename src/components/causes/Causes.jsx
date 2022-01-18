import Template from "../about/Template";
import { BsFillPencilFill } from "react-icons/bs";
const Causes = (props) => {
    return ( 
        <Template title ={"Causes " + props.name + " " + props.surname + " cares about"} 
        icon={<BsFillPencilFill />}
        content={
            <p>Children, Education, Health, and Environment</p>
        }
        />
     );
}
 
export default Causes;