import React, { useState } from "react";
import { useContext } from "react";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const EditProfileModal = ({ handleCloseModal, onSaveChanges }) => {
  /* ------------------------------ Set handlers ------------------------------ */
  const currentUser = useContext(CurrentUserContext);
  const _id = currentUser._id;
  const token = localStorage.getItem("jwt");

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setavatar] = useState("");
  const handleAvatarChange = (e) => {
    setavatar(e.target.value);
  };

  const isEnabled = name.length > 0 && avatar.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveChanges({ name, avatar, _id, token });
  };
  /* -------------------------------------------------------------------------- */
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      onClose={handleCloseModal}
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
          placeholder={currentUser.name}
          minLength="1"
          maxLength="30"
        ></input>
      </label>
      <label>
        <h3 className="modal_form-input-title">Avatar URL</h3>
        <input
          className="modal_form-input"
          type="url"
          name="link"
          value={avatar}
          onChange={handleAvatarChange}
          placeholder={currentUser.avatar}
          minLength="1"
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
