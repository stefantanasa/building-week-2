import react, { useRef } from "react";


const FileUploader = ({onFileSelect}) => {



    let fileInput = useRef(null)
    
    let handleFileInput = (e)=> {

        //handle validations
        onFileSelect(e.target.files[0])

    }

    return ( 

        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e=>fileInput.current && fileInput.current.click()} className="btn btn-primary" > Submit </button>
        </div>

     );
}
 
export default FileUploader;