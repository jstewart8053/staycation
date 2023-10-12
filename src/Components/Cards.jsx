function Cards(props) {
  return (
    <>
      <div className="card">
        <img src="/assets/hiking.png" className="card--image" />
        <div className="card--stats">
          <img src="assets/star.png" className="card--star" />
          <span>5.0</span>
          <span> (6)•</span>
          <span>USA</span>
        </div>
        <p>Hiking Safety with Javier Ross</p>
        <p>
          <b>From $136</b>/ person
        </p>
      </div>
    </>
  );
}

export default Cards;
