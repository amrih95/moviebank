import React, { Component } from 'react';
import BigCard from '../Components/BigCard/BigCard';

class MovieDetailPage extends Component {
  render() {
    return (
      <div>
        <BigCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default MovieDetailPage;
