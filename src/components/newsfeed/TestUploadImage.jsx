import { useState } from "react";
import FileUploader from "./FileUploader";



const TestUploadImage = () => {

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  let submitForm = ()=>{

  }



    return ( 
        <div className="App">
      <form >
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input type="file"
        value={selectedFile}
        onChange={(e)=>setSelectedFile(e.target.files[0])}
        
        />
        <FileUploader 
        onFileSelectSuccess={(file=>setSelectedFile(file))}
        onFileSelectorError = {({error})=>alert(error)}
        
        />
         <button onClick={submitForm}>Submit</button>
      </form>
    </div>
     );
}
 
export default TestUploadImage;