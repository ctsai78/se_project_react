import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
import { useState } from "react";
import ItemModal from "./components/ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";
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
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
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
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
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
