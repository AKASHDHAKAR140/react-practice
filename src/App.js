//import logo from './logo.svg';
//import './App.css';
import Login from './Component/Login';
import Registration from './Component/Registration';
//import Decreament from './Component/Decreament';
//import Api from './Component/Api';
//import UseReducer from './Component/UseReducer';
//import Useparams from './Component/Useparams';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import Todolist from './Component/Todolist';
function App() {
  return (
    <div >
    
    
    <BrowserRouter>
  <Routes>
  <Route path = "/" element = {<Registration/>}/>
  <Route path = "/login" element = {<Login/>}/>
    </Routes>
  
  </BrowserRouter>

  {/*


<BrowserRouter>
  <Routes>
  <Route path = "/" element = {<Api/>}/>
  <Route path = "/useparam/:id" element = {<Useparams/>}/>
  </Routes>
  
  </BrowserRouter>
*/}  {/*
   <Api/>
  <UseReducer/>
  */}
        </div>
  );
}

export default App;
