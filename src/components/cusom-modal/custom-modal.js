import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleLoginForm } from "../../store/main/mainSlice";
const customStyles = {
  overlay: {
    backgoundColor: "red",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "390px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function CustomModal({ open, content }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleLoginForm());
  };

  return (
    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
      {content}
    </Modal>
  );
}

export default CustomModal;
