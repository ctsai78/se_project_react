import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
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
          <button className="modal_submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
