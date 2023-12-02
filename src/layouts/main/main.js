import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home/home";
import Finding from "../../pages/finding/finding";
import NotFound from "../../pages/not-found/not-found";
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/finding" element={<Finding />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default Main;
