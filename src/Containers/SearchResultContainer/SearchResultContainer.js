import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import Loader from '../../Components/Loader/Loader';
import { connect } from 'react-redux';
import * as MovieAction from '../../Actions/MovieAction';
import './SearchResultContainer.scss';
import Card from '../../Components/Card/Card';
import { Redirect } from 'react-router';
import BackImg from '../../Assets/images/back-button.png';

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
  }
  componentWillMount() {
    this.props.dispatch(MovieAction.fetchMovies(this.props.id, ''));
  }

  render() {
    const { listMovie, totalResults, isFetching } = this.props;

    if (isFetching || isFetching === undefined) return <Loader />;

    if ( listMovie === undefined) return <Redirect to='/404' />;

    return (
      <div className='search-result'>
        <Container>
          <div>
            <a href='/' className='btn-back'>
              <img alt='Back' src={BackImg}></img>
            </a>
          </div>
          <Col>
            <div className='title'>
              <h4 className='suggestion'>
                <em> {totalResults}</em> Found, Showing result of
                <em> "{this.props.id}"</em>
              </h4>
            </div>
          </Col>
          <br />
          <div>
          <Col>
            {listMovie.map((movie, index) => {
              return <Card movie={movie} key={index} />;
            })}
          </Col>
        </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.moviereducer.movies.Search,
    isFetching: state.moviereducer.isFetching,
    totalResults: state.moviereducer.movies.totalResults,
  };
};

export default connect(mapStateToProps)(SearchResultContainer);
