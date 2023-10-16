function Cards(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card--image" />
        <div className="card--stats">
          <img src={props.star} className="card--star" />
          <span>{props.score}</span>
          <span> {props.reviewNum}•</span>
          <span>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>${props.price}/person</p>
      </div>
    </>
  );
}

export default Cards;
