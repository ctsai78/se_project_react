import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttonText, title, onClose, name }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button
          className="modal_close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal_title">{title}</h3>
        <form className="modal_form">{children}</form>
        <button className="modal_submit-button" type="button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
