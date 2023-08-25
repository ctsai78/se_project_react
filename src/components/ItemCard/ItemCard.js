import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <img
        className="card_image"
        src={item.imageUrl}
        onClick={() => onSelectCard(item)}
        alt="Card Image"
      />
      <p className="card_name">{item.name}</p>
    </div>
  );
};

export default ItemCard;
