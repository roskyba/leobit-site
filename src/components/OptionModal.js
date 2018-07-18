import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
    ariaHideApp={false}
    onRequestClose={props.handleClearSelectedOption}
  >
    <h2>Selected option</h2>
    {props.selectedOption && (<p>{props.selectedOption}</p>)}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;