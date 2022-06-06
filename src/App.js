
import Upload from "./components/upload-page";
import UploadedList from "./components/uploaded-files";
import { Routes, Route, Link } from "react-router-dom";
import List from "./components/list-items";


function App() {
  return (
    <div className="App">

     <Routes>
       <Route path="/" element= {<Upload />}/>
       <Route  path="uploads" element= {<UploadedList />}/>
       <Route path="files"  element= {<List />}/>

     </Routes>
      
    </div>
  );
}

export default App;
