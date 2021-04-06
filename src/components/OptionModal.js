import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const OptionModal = (props) => (
  <Modal
    isOpen={
      !!props.selectedOption /*The !! option evaluates if variable exists returning boolean  */
    }
    onRequestClose={props.deleteSelected}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.deleteSelected}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
