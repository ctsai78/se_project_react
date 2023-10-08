import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  altText,
  onSubmit,
  altSubmit,
  isEnabled,
}) => {
  const submitButtonClass = `modal_submit-button ${
    isEnabled ? "modal_submit-button_enabled" : "modal_submit-button_disabled"
  }`;

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button
          className="modal_close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal_title">{title}</h3>
        <form onSubmit={onSubmit} className="modal_form">
          {children}
          <div>
            <button
              className={submitButtonClass}
              type="submit"
              disabled={!isEnabled}
            >
              {buttonText}
            </button>
            <button className="modal_alt-submit-button" onClick={altSubmit}>
              {altText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
