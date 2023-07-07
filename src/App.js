import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { shoeProducts } from "./pages/Products";
import { myContext } from "./pages/Context";
import Ragistration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Collection from "./pages/Collection";
import Lookbook from "./pages/Lookbook";
import Sale from "./pages/Sale";
import Viewproduct from "./pages/Viewproduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/Home.css";



function App() {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState(shoeProducts);
  console.log(products);

  return (
    <BrowserRouter>
      <myContext.Provider value={{ user, setUser, products, setProducts }}>
        <div>
          <Routes>
            <Route path="/Ragistration" element={<Ragistration />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/Lookbook" element={<Lookbook />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Viewproduct/:id" element={<Viewproduct />} />
          </Routes>
        </div>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
