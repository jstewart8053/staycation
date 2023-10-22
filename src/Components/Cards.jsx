function Cards(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <img src="assets/star.png" className="card--star" />
        <span>{props.rating} </span>
        <span>({props.reviewCount}) •</span>
        <span>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>${props.price}/person</p>
    </div>
  );
}

export default Cards;
