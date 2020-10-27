import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className='loader-bg'>
        <Spinner className='loader-wrap' animation='border' role='status' variant='info'></Spinner>
      </div>
    );
  }
}

export default Loader;
