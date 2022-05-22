import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
