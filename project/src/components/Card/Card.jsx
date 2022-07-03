import React from 'react';
import './Card.css';



class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='card'>
        <img src={this.props.card.imgUrl} alt="" />
        <div className='card__content'>
          <h2>{this.props.card.price}</h2>
          <h5>{this.props.card.title}</h5>
          <p>{this.props.card.content}</p>
          <span>{this.props.card.date}</span>
        </div>
      </div>
    );
  }
}

export default Card;