import React, { useContext } from "react";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const ClothesSection = ({ cards, onSelectCard, onCreateModal }) => {
  const { currentUser } = useContext(CurrentUserContext);
  // const filteredCards = cards.filter((item) => {
  //   return item.owner._id === currentUser._id;
  // });

  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <h3> Your Items </h3>
        <button
          className="clothes-section__button"
          type="text"
          onClick={onCreateModal}
        >
          +Add New
        </button>
      </div>
      <div className="clothes-section__card">
        {cards.map((item) => (
          <ItemCard item={item} onSelectCard={onSelectCard} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
