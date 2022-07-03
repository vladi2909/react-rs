import React from "react";
import cardsData from '../cardsData';
import Card from '../components/Card/Card';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: cardsData
    }
  }

  render() {
    const cardItem = this.state.cards.map(card => <Card key={card.id} card={card} />);

    return (
      <>
        { cardItem }
      </>
    );
  }
}

export default HomePage;
