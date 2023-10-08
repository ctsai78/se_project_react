import React, { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, onSignUp, onLogInModal }) => {
  /* ------------------------------ Set handlers ------------------------------ */
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEnabled =
    name.length > 0 &&
    avatarUrl.length > 0 &&
    email.length > 0 &&
    password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ name, avatarUrl, email, password });
  };
  /* -------------------------------------------------------------------------- */

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      onClose={handleCloseModal}
      altText="or Log in"
      onSubmit={handleSubmit}
      altSubmit={onLogInModal}
      isEnabled={isEnabled}
    >
      <label>
        <h3 className="modal_form-input-title">Email*</h3>
        <input
          className="modal_form-input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          minLength="1"
          required
        ></input>
      </label>
      <label>
        <h3 className="modal_form-input-title">Password*</h3>
        <input
          className="modal_form-input"
          type="text"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          minLength="1"
          maxLength="30"
          required
        ></input>
      </label>
      <label>
        <h3 className="modal_form-input-title">Name</h3>
        <input
          className="modal_form-input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          minLength="1"
          maxLength="30"
          required
        ></input>
      </label>
      <label>
        <h3 className="modal_form-input-title">Avatar URL</h3>
        <input
          className="modal_form-input"
          type="url"
          name="link"
          value={avatarUrl}
          onChange={handleAvatarChange}
          placeholder="Avatar URL"
          minLength="1"
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
