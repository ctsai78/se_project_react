import "./ItemModal.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDeleteCard }) => {
  const currentUser = useContext(CurrentUserContext);
  const token = localStorage.getItem("jwt");

  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const modalDeleteClass = `modal_delete-button ${
    isOwn ? "modal_delete-button_visible" : "modal_delete-button_hidden"
  }`;

  return (
    <div className={`modal`}>
      <div className="modal_content-image">
        <button
          className="modal_item-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal_image"
          src={selectedCard.imageUrl}
          alt="Selected Card Image"
        />

        <div className="modal_description-section">
          <div>
            <div className="modal_description">{selectedCard.name}</div>
            <div className="modal_description">
              Weather Type: {selectedCard.weather}
            </div>
          </div>
          <div
            className={modalDeleteClass}
            onClick={() => onDeleteCard(selectedCard, token)}
          >
            Delete item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
