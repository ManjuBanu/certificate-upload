import './App.css';
import { useState } from 'react'
import FileUpload from './FileUpload/file-upload'
import FileList from './FileList/file-list'

function App() {
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  console.log("files::",files)
  return (
    <div className="App">
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
    </div>
  );
}

export default App;
