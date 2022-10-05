import { React } from "react";
import {  RiCloseFill } from "react-icons/ri";

import Modal from "react-modal";

import style from "./style.module.scss";

const Popup = ({ children, title, isOpen, toggle, ...props }) => {

    return (
          <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            className={style.popup}
            overlayClassName={style.popup_overlay}
            {...props}
          >
              <div className={style.popup_header}>
                  <h3 className={style.popup_header__title}>{title}</h3>
                  <RiCloseFill className={style.popup_header__close} onClick={toggle}></RiCloseFill>
              </div>
               
               {children}
          </Modal>
    )
  };
  
  export default Popup;
