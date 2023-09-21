import "./card-list.styles.css";
import SingleCard from "../card/singleCard.component";

const CardList =({monsters})=>{
  return(
    <div className="card-list">
    {monsters.map((item) => {
      const { name, email, id } = item; //destructuring
      return (
        <SingleCard
          key={id}
          name={name}
          email={email}
          id={id}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}  
        />
      );
    })}
  </div>
  )
}



export default CardList;
