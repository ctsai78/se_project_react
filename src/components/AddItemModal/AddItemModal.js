import React, { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  /* ------------------------------ Set handlers ------------------------------ */
  const token = localStorage.getItem("jwt");

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const isEnabled =
    name.length > 0 && imageUrl.length > 0 && weather.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather, token });
  };
  /* -------------------------------------------------------------------------- */

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isEnabled={isEnabled}
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
          value={imageUrl}
          onChange={handleUrlChange}
          placeholder="image URL"
          minLength="1"
        ></input>
      </label>
      <p className="modal_selection-title">Select the weather type:</p>
      <div className="modal_selection">
        <div className="modal_selection-item">
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            onChange={handleWeatherChange}
          />
          <label>Hot</label>
        </div>
        <div className="modal_selection-item">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            onChange={handleWeatherChange}
          />
          <label>Warm</label>
        </div>
        <div className="modal_selection-item">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            onChange={handleWeatherChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
