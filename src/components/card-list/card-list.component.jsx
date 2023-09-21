import { Component } from "react";
import "./card-list.styles.css";
import SingleCard from "../card/singleCard.component";

class CardList extends Component {
  render() {
    console.log(`card list render`);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((item) => {
          const { name, email, id } = item; //destructuring
          return (
            <SingleCard
              name={name}
              email={email}
              id={id}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt={`monster ${name}`}  
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
