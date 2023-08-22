import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDeleteCard }) => {
  return (
    <div className={`modal`}>
      <div className="modal_content-image">
        <button
          className="modal_item-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal_image" src={selectedCard.imageUrl} />

        <div className="modal_description-section">
          <div>
            <div className="modal_description">{selectedCard.name}</div>
            <div className="modal_description">
              Weather Type: {selectedCard.weather}
            </div>
          </div>
          <div className="modal_delete" onClick={onDeleteCard(selectedCard)}>
            Delete item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
