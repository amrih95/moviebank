import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import './ListMovie.scss';
import { connect } from 'react-redux';
import * as MovieAction from '../../Actions/MovieAction';
import { Container, Row } from 'react-bootstrap';
import Loader from '../../Components/Loader/Loader';
import Paging from '../../Components/Paging/Paging';
import SearchBox from '../../Components/SearchBox/SearchBox';

class ListMovie extends Component {
  componentWillMount() {
    this.props.dispatch(MovieAction.fetchMovies());
  }

  render() {
    const { listMovie, totalResults, isFetching, current } = this.props;

    if (isFetching || isFetching === undefined) return <Loader />;

    return (
      <div className="set-bg">
        <Container>
          <SearchBox/>
          <div className='item-title'>
            War Movie
         </div>
          <Row>
            {listMovie.map((movie, index) => {
              return <Card movie={movie} key={index} />;
            })}
          </Row>
          <Paging totalResults={totalResults} current={current} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.moviereducer.movies.Search,
    totalResults: state.moviereducer.movies.totalResults,
    isFetching: state.moviereducer.isFetching,
    current: state.moviereducer.current,
  };
};

export default connect(mapStateToProps)(ListMovie);
