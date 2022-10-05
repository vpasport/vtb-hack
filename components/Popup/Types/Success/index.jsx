import Modal from "react-modal";

import styles from "./style.module.scss";

const SuccessPopup = ({ children,  isOpen, toggle, ...props }) => {

    return (
          <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            className={styles.popup}
            overlayClassName={styles.popup_overlay}
            {...props}
          >
           { children }
          </Modal>
    )
  };
  
  export default SuccessPopup;
