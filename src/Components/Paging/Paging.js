import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import './Paging.scss';
import * as MovieAction from '../../Actions/MovieAction';
import { connect } from 'react-redux';

class Paging extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.dispatch(MovieAction.fetchMovies('war', event.target.id));
  }

  render() {
    const { totalResults, current } = this.props;

    let items = [];
    for (let number = 1; number <= totalResults / 10 + 1; number++) {
      items.push(
        <Pagination.Item
          onClick={this.handleClick}
          key={number}
          id={number}
          active={number === parseInt(current)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div>
        <Pagination>{items}</Pagination>
      </div>
    );
  }
}
export default connect()(Paging);
