import axios from 'axios'
import React from 'react'
import FileItem from './../FileItem/file-item'

const FileList = ({ files, removeFile,inputField }) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <ol className="file-list">
            {
                files &&
                files.map(f => (<FileItem 
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} 
                   inputField={inputField}
                />))
            }
        </ol>
    )
}

export default FileList
