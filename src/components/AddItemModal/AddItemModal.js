import React, { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit()}
    >
      <label>
        <h3 className="modal_form-input-title">Name</h3>
        <input
          className="modal_form-input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="name"
          minLength="1"
          maxLength="30"
        ></input>
      </label>
      <label>
        <h3 className="modal_form-input-title">Image</h3>
        <input
          className="modal_form-input"
          type="url"
          name="link"
          value={link}
          onChange={handleUrlChange}
          placeholder="image URL"
          minLength="1"
          maxLength="30"
        ></input>
      </label>
      <p className="modal_selection-title">Select the weather type:</p>
      <div className="modal_selection">
        <div className="modal_selection-item">
          <input type="radio" id="hot" value="hot" name="weather" />
          <label>Hot</label>
        </div>
        <div className="modal_selection-item">
          <input type="radio" id="warm" value="warm" name="weather" />
          <label>warm</label>
        </div>
        <div className="modal_selection-item">
          <input type="radio" id="cold" value="cold" name="weather" />
          <label>cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;