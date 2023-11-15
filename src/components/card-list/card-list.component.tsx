import "./card-list.styles.css";
import SingleCard from "../card/singleCard.component";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};
const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((item) => {
      const { id } = item; //destructuring
      return <SingleCard key={id} monster={item} />;
    })}
  </div>
);

export default CardList;
