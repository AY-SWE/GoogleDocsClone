import Editor from "./components/editor/Editor";
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import {v4 as uuid} from "uuid";    //generaters random unique id 
/*
    This is our application's top-level component.
    
    @author Andy Yang
*/
/*
  This is the entry-point for our application. Many different home pages
  
  @author Andy Yang
*/

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Navigate replace to= {`/docs/${uuid()}`}/>} />  
          <Route path="/docs/:id" element={<Editor/>}/>  
      </Routes> 
    </div>
  );
}

export default App;
