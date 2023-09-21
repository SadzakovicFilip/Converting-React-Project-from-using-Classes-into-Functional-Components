import "./singleCard.styles.css";

const SingleCard = ({ alt, src, name, email, id }) => {
  return (
    <div className="card-container" key={id}>
      <img alt={alt} src={src} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default SingleCard;
