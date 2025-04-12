const CartComponent = ({ category, image, title, price }) => {
  return (
    <div className="card" data-category={category}>
      <img src={image} />
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="favorite">❤</div>
      <div className="price">{price}</div>
    </div>
  );
};

const CardListComponent = ({ cardsData }) => (
  <div className="card-grid">
    {cardsData.map((card, index) => (
      <CartComponent
        title={card.title}
        price={card.price}
        image={card.image}
        category={card.category}
        key={index}
      />
    ))}
  </div>
);
