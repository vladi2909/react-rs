import React from "react";
import cardsData from '../cardsData';
import Card from '../components/Card/Card';
import Button from '@mui/material/Button';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputSearch: "",
      cards: cardsData
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  divSearch = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
  };

  componentDidMount() {
    const inputStorage = localStorage.getItem("inputSearch");
    this.setState({ inputSearch: inputStorage });
  }

  componentWillUnmount() {
    localStorage.setItem("inputSearch", this.state.inputSearch);
  }

  handleChangeInput(e) {
    this.setState({ inputSearch: e.target.value });
  }

  render() {
    const cardItem = this.state.cards.map(card => <Card key={card.id} card={card} />);

    return (
      <>
      <div style={this.divSearch}>
        <input type="text" onInput={this.handleChangeInput} value={this.state.inputSearch} />
        <Button variant="contained">Contained</Button>
      </div>
        { cardItem }
      </>
    );
  }
}

export default HomePage;
