import React from 'react';
import './App.css';
import cardsData from './cardsData';
import Card from './components/Card/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: cardsData
    }
  }
  
  render() {
    const cardItem = this.state.cards.map(card => <Card key={card.id} card={card} />)
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <main>
          {cardItem}
        </main>
        <footer></footer>  
      </div>
    );
  }
}

export default App;
