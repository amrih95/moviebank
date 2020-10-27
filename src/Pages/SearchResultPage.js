import React, { Component } from 'react';
import SearchResultContainer from '../Containers/SearchResultContainer/SearchResultContainer';


class SearchResultPage extends Component {
  render() {
    return <SearchResultContainer id={this.props.match.params.id}/>;
  }
}

export default SearchResultPage;
