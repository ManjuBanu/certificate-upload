import './App.css';
import { useState } from 'react'
import FileUpload from './FileUpload/file-upload'

function App() {
  const [files, setFiles] = useState([])
  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <div className="App">
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
    </div>
  );
}

export default App;
