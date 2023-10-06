import "./ItemCard.css";
import unliked_button from "../../images/unliked_button.svg";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <img
        className="card_image"
        src={item.imageUrl}
        onClick={() => onSelectCard(item)}
        alt="Card Image"
      />
      <img className="card_like-button" src={unliked_button} />
      <p className="card_name">{item.name}</p>
    </div>
  );
};

export default ItemCard;
