import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

class Card extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='item'>
        <div className='card-item-content'>
          <div>
            <Link to={'/movie/' + movie.imdbID}>
              <div className='card-item-content-image'>
                <picture className='picture-tag'>
                  <img src={movie.Poster} alt='' />
                </picture>
              </div>
            </Link>
          </div>
          <div className='titles'>{movie.Title}</div>
          <div className='detail'>
            <div className='subtitle'>{movie.Year}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
