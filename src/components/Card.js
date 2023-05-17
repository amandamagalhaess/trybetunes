import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Card extends React.Component {
  render() {
    const { album } = this.props;
    const { artworkUrl100, collectionName, artistName, collectionId } = album;
    return (
      <div>
        <img src={ artworkUrl100 } alt="album" />
        <h3>{collectionName}</h3>
        <p>{artistName}</p>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          +
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  album: PropTypes.shape({
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  }).isRequired,
};

export default Card;