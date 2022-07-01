import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='card'>
        <img src="" alt="" />
        <h2>{this.props.card.price}</h2>
        <h6>{this.props.card.title}</h6>
        <p>{this.props.card.content}</p>
        <span>{this.props.card.date}</span>
      </div>
    );
  }
}

export default Card;