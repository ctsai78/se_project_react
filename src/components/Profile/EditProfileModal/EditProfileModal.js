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

  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveChanges({ name, avatarUrl, _id, token });
    console.log(_id);
  };
  /* -------------------------------------------------------------------------- */
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
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
          value={avatarUrl}
          onChange={handleAvatarChange}
          placeholder={currentUser.avatarUrl}
          minLength="1"
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
