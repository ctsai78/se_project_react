import React, { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, onLogin, onSignUpModal }) => {
  /* ------------------------------ Set handlers ------------------------------ */
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEnabled = email.length > 0 && password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };
  /* -------------------------------------------------------------------------- */
  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      onClose={handleCloseModal}
      altText="or Register"
      onSubmit={handleSubmit}
      altSubmit={onSignUpModal}
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
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
