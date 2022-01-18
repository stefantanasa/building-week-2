import {Button} from 'react-bootstrap'

const RoundButton = (props) => {
    let classProps = "round-button btn btn-sm  rounded-pill border border-4 btn-" + props.color
    
    return ( 
        
        <button type="button " className={classProps} >{props.text}</button>
     );
}
 
export default RoundButton;