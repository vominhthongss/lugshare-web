import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home/home";
import Finding from "../../pages/finding/finding";
import NotFound from "../../pages/not-found/not-found";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/finding" element={<Finding />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Main;
