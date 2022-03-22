import React, { useState } from 'react'
import './file-upload.css'
import axios from 'axios'

const FileUpload = ({ files, setFiles, removeFile }) => {

    const [certificateName, setCertificateName] = useState();
    const [issuerName, setIssuerName] = useState();

    const onCertificateNameChange = (event) =>{
        const certificateName = event.target.value;
        console.log("certificateName",certificateName)
    }

    const onIssuerNameChange =(event) =>{
        const issuerName = event.target.value;
        console.log("issuerName",issuerName)
    }
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

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
  <input type="text" name='certificateName' value={certificateName} className="input-control" onChange={event =>setCertificateName(event.target.value)}/>
  </div>
  
<div className="float-element">
  <label>Issuer</label>
  <input type="text" value={issuerName} className="input-control" onChange={event => {setIssuerName(event.target.value)}} />
  </div>
</div>


<div className="file-container" placeholder="hiii">
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
  <button className="styledButton">SAVE CERTIFICATION</button>
</div>
  
</div>
</form>
</div>
        </>
    )
}

export default FileUpload
