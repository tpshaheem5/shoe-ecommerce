import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ragistration from './pages/Ragistration';
import Login from './pages/Login';
import Home from './pages/Home';
import "./pages/Home.css"
import Men from './pages/Men';

export const myContext = createContext();



function App() {
  const [user,setUser]=useState([])
  
  return (

    <BrowserRouter>
   
    <myContext.Provider value={{user,setUser}}>
    <div>
      <Routes>
        <Route path='/Ragistration' element={<Ragistration/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Home'element={<Home/>}/>
        <Route path='/Men'element={<Men />}/>
      </Routes>
    </div>
    </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
