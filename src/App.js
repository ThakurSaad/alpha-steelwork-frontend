import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./Pages/Shared/Navbar";
import ToolDetails from "./Pages/Home/ToolDetails";
import AllTool from "./Pages/Home/AllTool";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="allTool" element={<AllTool />} />
        <Route path="tool/:toolId" element={<ToolDetails />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
