import "./App.css";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";
import Main from "./layouts/main/main";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import theme from "./constants/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col h-full">
          <Router>
            <Navigation />
            <Routes>
              <Route path="/*" element={<Main />} />
            </Routes>
            <Footer />
          </Router>
        </div>
        /
      </ThemeProvider>
    </Provider>
  );
}

export default App;
