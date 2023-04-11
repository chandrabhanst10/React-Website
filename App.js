import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
      <Footer/>

     
    </div>
  );
}

export default App;
