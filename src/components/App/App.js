import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          buttonText="Add garment"
          onClose={handleCloseModal}
        >
          <label>
            <h3 className="modal_form-input-title">Name</h3>
            <input
              className="modal_form-input"
              type="text"
              name="name"
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
              placeholder="image URL"
              minLength="1"
              maxLength="30"
            ></input>
          </label>
          <p className="modal_selection-title">Select the weather type:</p>
          <div className="modal_selection">
            <div className="modal_selection-item">
              <input type="radio" id="hot" value="hot" name="weather" />
              <label>Hot</label>
            </div>
            <div className="modal_selection-item">
              <input type="radio" id="warm" value="warm" name="weather" />
              <label>warm</label>
            </div>
            <div className="modal_selection-item">
              <input type="radio" id="cold" value="cold" name="weather" />
              <label>cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
