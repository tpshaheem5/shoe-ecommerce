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
import Viewproduct from "./pages/Viewproduct";
import Cart from "./pages/Cart"
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/Home.css";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Adminlogin from "./Admin/Adminlogin";
import Adminproducts from "./Admin/Adminproducts";
import Updateproduct from "./Admin/Updateproduct";
import AddProduct from "./Admin/Addproduct";




function App() {
  const [login,setLogin]=useState(false)
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState(shoeProducts);
  const [cart,setCart]=useState([])
  const [admin,setAdmin]=useState({username:'admin',password:'admin123'})
 

  return (
    <BrowserRouter>
      <myContext.Provider value={{ user, setUser,login,setLogin, products, setProducts,cart,setCart,admin,setAdmin }}>
        <div>
          <Routes>
            <Route path="/Registration" element={<Ragistration />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/Lookbook" element={<Lookbook />} />
            <Route path="/Viewproduct/:id" element={<Viewproduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Payment/:id" element={<Payment />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Adminlogin" element={<Adminlogin />} />
            <Route path="/Adminproducts" element={<Adminproducts />} />
            <Route path="/Updateproduct/:id" element={<Updateproduct />} />
            <Route path="/Addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
