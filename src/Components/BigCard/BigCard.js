import React, { Component } from 'react';
import './BigCard.scss';
import { connect } from 'react-redux';
import * as MovieAction from '../../Actions/MovieAction';
import Loader from '../Loader/Loader';
import { Col, Container, Row } from 'react-bootstrap';
import BackImg from '../../Assets/images/back-button.png';

class BigCard extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: null };
  }
  componentWillMount() {
    this.props.dispatch(MovieAction.getMovies(this.props.id));
  }
  render() {
    const { detail, isFetching } = this.props;

    if (isFetching || isFetching === undefined || detail === undefined ) return <Loader />;
    
    return (
      <div className='detail-content'>
        <Container>
          <div>
            <a href='/' className='btn-back-d'>
              <img alt='Back' src={BackImg}></img>
            </a>
          </div>
          <div className='content-main'>
            <Row>
              <Col lg={12}>
                <Row>
                  <Col md={6} lg={4} xs={12}>
                    <div className='content-img'>
                      <img src={detail?.Poster} alt='' />
                    </div>
                  </Col>
                  <Col md={6} lg={8} xs={12}>
                  <div className='content-type'>
                    <p>{detail?.Type}</p>
                  </div>
                  <div className='content-title'>
                    <p>{detail?.Title}</p>
                  </div>
                  <div className='content-runtime'>
                    <div className='runtime'>
                      <p>{detail?.Runtime}</p>
                    </div>
                    <div className='metascore'>
                      <p>Metascore : {detail?.Metascore}</p>
                    </div>
                  </div>
                  <div className='content-rating'>
                    <p className='rating-item'>imdbRating : {detail?.imdbRating}</p>
                    <p className='rating-vote'>imdbVotes : {detail?.imdbVotes}</p>
                    <p>Awards : {detail?.Awards}</p>
                  </div>
                  <div className='content-plot'>
                    <p>{detail?.Plot}</p>
                  </div>
                  <div className='content-sub-item'>
                    <div className='sub-title'>
                      About {detail?.Title}
                    </div>
                    <div className='sub-content'>
                      <p>Director : {detail?.Director}</p>
                      <p>Actors : {detail?.Actors}</p>
                      <p>Genres : {detail?.Genre}</p>
                      <p>Writer : {detail?.Writer}</p>
                      <p>Maturity Rating : {detail?.Rated}</p>
                      <p>Release Date : {detail?.Released}</p>
                      <p>BoxOffice : {detail?.BoxOffice}</p>
                      <p>DVD : {detail?.DVD}</p>
                      <p>Production : {detail?.Production}</p>
                      <p>Response : {detail?.Response}</p>
                      <p>Website : {detail?.Website}</p>
                      <p>Country : {detail?.Country}</p>
                      <p>Language : {detail?.Language}</p>
                      <p>Year : {detail?.Year}</p>
                    </div>
                  </div>
                </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.moviereducer.movie,
    isFetching: state.moviereducer.isFetching,
  };
};

export default connect(mapStateToProps)(BigCard);
