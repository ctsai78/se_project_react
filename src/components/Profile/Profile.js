import React from "react";
import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, onCreateModal }) => {
  return (
    <div className="Profile">
      <SideBar />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
};

export default Profile;
