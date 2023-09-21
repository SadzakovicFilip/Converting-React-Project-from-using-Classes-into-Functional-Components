import { Component } from "react";
import "./singleCard.styles.css"

class SingleCard extends Component {
  render() {
    const { alt, src, name, email,id } = this.props;
    return (
      <div className="card-container" key={id}>
        <img
          alt={alt}
          src={src}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default SingleCard
