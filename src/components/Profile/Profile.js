import React from "react";
import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({
  cards,
  onSelectCard,
  onCreateModal,
  onEditProfile,
  onLogOut,
}) => {
  return (
    <div className="Profile">
      <SideBar onEditProfile={onEditProfile} onLogOut={onLogOut} />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
};

export default Profile;
