import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
  render() {
    return (
      <div className='notf'>
        <div className='central-body'>
          <img className='image-404' src='https://doofinder-web.s3.amazonaws.com/main-files/uploads/2019/08/110655-404-not-found-Doofinder.jpg' width='300px' alt='' />
          <a href='/' className='btn-go-home'>
            GO BACK HOME
          </a>
        </div>
      </div>
    );
  }
}

export default NotFound;
