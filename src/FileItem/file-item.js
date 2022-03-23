import React,{useContext} from 'react'
import './file-item.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'




const FileItem = ({ file, deleteFile,inputField}) => {
  return (
    <>
    <div className='styledContainer'>
    <li
                key={file.name}>
                  <div className='infoContainer'>
                    <p><b>{inputField.certificateName}</b>{inputField.issuerName}</p>
        <a href="`http://localhost:8080/open?name=${_name}" target='_blank'>view certification</a>
        </div>
         <div className="actions">
         {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faTrash}
                            onClick={() => deleteFile(file.name)} />
                    }
        </div> 
 
       </li>
       </div>
    </>
  )
}

export default FileItem;