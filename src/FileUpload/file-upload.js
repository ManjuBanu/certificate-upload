import React, { useState,createContext } from 'react'
import './file-upload.css'
import axios from 'axios'
import FileList from '../FileList/file-list'


const FileUpload = ({ files, setFiles, removeFile}) => {

  const [inputField , setInputField] = useState({
    certificateName: '',
    issuerName: '',
})

const [save , setSave] = useState(false);

const inputsHandler = (e) =>{
  setInputField( {[e.target.name]: e.target.value} )
  setSave(false)
}
    
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])
        setSave(true)

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }    

    return (
        <>
            <div className="main-content">

<header>
  <h1>Skills-Based Certification</h1>
  <small>
              <p>(you can add upto 5 Certification)
              </p>
              <p>&nbsp;</p>
          </small>
</header>
<form action=''>
<div className="form-container">
<div className="form-group">
  <div className="float-element">
  <label>Certification name</label>
  <input required type="text" name='certificateName' value={inputField.certificateName} className="input-control" onChange={inputsHandler}/>
  </div>
  
<div className="float-element">
  <label>Issuer</label>
  <input required type="text" name='issuerName' value={inputField.issuerName} className="input-control" onChange={inputsHandler} />
  </div>
</div>


<div className="file-container">
  <div className='file file--upload'>
  <p className='topAlign'>upload a file showing your certification</p>
      <label for='input-file'>
        <i className="material-icons">cloud_upload</i>Upload
      </label>
      <input id='input-file' type='file' onChange={uploadHandler} />
      
    </div>
    </div>
<p className="styledptag">(you can add upto 5 Certification)
              </p>


<div className="form-group">
  <label>&nbsp;</label>
  <button className="styledButton" onSubmit={()=>setSave(true)}>SAVE CERTIFICATION</button>
</div>
  
</div>
</form>
</div>
<FileList files={files} removeFile={removeFile} inputField={inputField} save={save} />

        </>
    )
}

export default FileUpload
