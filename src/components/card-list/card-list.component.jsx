import { Component } from "react";

class CardList extends Component{
    render(){
        console.log(`card list render`)
        const {monsters} = this.props
        return(
            <div>
                {monsters.map((item,key)=><h1 key={key}>{item.name}</h1>)}
            </div>
        )
    }
}

export default CardList