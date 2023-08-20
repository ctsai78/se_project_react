import React from "react";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";

const ClothesSection = ({ onSelectCard, onCreateModal }) => {
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
        {defaultClothingItems.map((item) => (
          <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
