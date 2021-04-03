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
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.deleteSelected}>Okay</button>
  </Modal>
);

export default OptionModal;
