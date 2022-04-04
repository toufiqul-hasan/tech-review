import { Route, Routes } from "react-router-dom";
import "./App.css";
import Reviews from "./Components/Reviews/Reviews";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;