import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home/home";
import Finding from "../../pages/finding/finding";
import NotFound from "../../pages/not-found/not-found";
import CustomModal from "../../components/cusom-modal/custom-modal";
import Login from "../../components/login/login";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { resetAlert } from "../../store/main/mainSlice";
function Main() {
  const dispatch = useDispatch();
  const { showLoginForm, alert } = useSelector((state) => state.main);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(resetAlert());
  };

  return (
    <>
      <CustomModal open={showLoginForm} content={<Login />} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alert?.show}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {alert.type && (
          <Alert
            onClose={handleClose}
            severity={alert?.type}
            sx={{ width: "100%" }}
          >
            {alert?.content}
          </Alert>
        )}
      </Snackbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/finding" element={<Finding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Main;
