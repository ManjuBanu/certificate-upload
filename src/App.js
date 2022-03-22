import './App.css';
import { useState } from 'react'
import Certification from './upload-page';
import FileUpload from './FileUpload/file-upload'

function App() {
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  console.log("files::",files)
  return (
    <div className="App">
      {/* <Certification/> */}
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
    </div>
  );
}

export default App;
