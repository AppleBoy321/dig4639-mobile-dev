import React from "react";
import Card from "../Card";
import data from "../../data.json";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: data.cards};
  }

  remove = (event) => {
    let datatitle = event.target.getAttribute("datatitle");
    let localCards = this.state.cards;
    let changedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });

    this.setState({cards: changedCards});
  }

  render() {
    return(
      <div>
          {
              this.state.cards.map((card, index) => {
                return <Card 
                    key={index}
                    title={card.title} 
                    content={card.content}
                    dataclick={this.remove} />
            })
          }
      </div>
    );
  }


}

export default CardList;