import React from "react";
import Navebar from "./Navebar";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";




function Home() {
  const Navigate = useNavigate();
  return (
    <div className="BACKGROUND_IMG">
      <Navebar />

      <div>
        <h1 style={{ color: "white", marginTop: "22%", marginLeft: "10px" }}>
          NEVER BEFORE.
        </h1>
        <h1 style={{ color: "white", marginLeft: "10px" }}>FOREEVER AFTER.</h1>
        <h6 style={{ color: "white", marginLeft: "10px" }}>
          Blending court-side attitude with a modern
          <br />
          touch for your everyday style
        </h6>
        <button onClick={() => Navigate(`/Men`)} style={{ marginLeft: "10px" }}>
          SHOP MEN
        </button>
        <button
          onClick={() => Navigate(`/Women`)}
          style={{ marginLeft: "10px" }}
        >
          SHOP WOMEN
        </button>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default Home;
