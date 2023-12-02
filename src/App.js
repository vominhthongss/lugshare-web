import "./App.css";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";
import Main from "./layouts/main/main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-[100%]">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
