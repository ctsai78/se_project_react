import "./ItemCard.css";
import unliked_button from "../../images/unliked_button.svg";
import liked_button from "../../images/liked_button.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  // Check if the item was liked by the current user.The likes array should be an array of ids
  const isLiked = item.likes.some((id) => id === currentUser._id);

  // Like button src
  const itemLikeButtonSrc = `${isLiked ? liked_button : unliked_button}`;

  // Check if user is authorized
  let isAuthorized = false;
  if (currentUser !== "") {
    isAuthorized = true;
  } else {
    isAuthorized = false;
  }

  // like button className variable
  const cardLikeButton = `card_like-button ${
    isAuthorized ? "card_like-button_visible" : "card_like-button_hidden"
  }`;

  return (
    <div className="card">
      <img
        className="card_image"
        src={item.imageUrl}
        onClick={() => onSelectCard(item)}
        alt="Card Image"
      />
      <div className="card_title">
        <p className="card_name">{item.name}</p>
        <img
          className={cardLikeButton}
          src={itemLikeButtonSrc}
          onClick={() => onCardLike(item._id, isLiked, currentUser)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
