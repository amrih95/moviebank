import React, { Component } from 'react';
// import { Col } from 'react-bootstrap';
import './SearchBox.scss';
import { connect } from 'react-redux';
// import * as StarshipAction from '../../Actions/StarshipAction';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = (e) => {
    this.setState({ keyword: e.target.value });
    // this.props.dispatch(StarshipAction.findstarships(this.state.keyword));
  };

  onClickHandler = () => {
    if (this.state.keyword.length < 3) {
      this.showError();
    } else {
      // this.props.dispatch(StarshipAction.findstarships(this.state.keyword));
      const dest = 'search/result/' + this.state.keyword;
      window.location.href = dest;
    }
  };

  showError() {
    alert('Character must more 3');
  }

  render() {
    return (
      <div className="input-group">
        <div className='title-search'>
        <h2>MOVIE BANK</h2>
        </div>
        <input className="form-control" name='keyword' type='text' placeholder='Find Movies' onChange={this.onChangeHandler} value={this.state.keyword || ''}></input>
        <div className="input-group-append">
        <button type="submit" className="searchButton" onClick={this.onClickHandler}>
          <i className="fa fa-search"></i>
        </button>
        </div>
      </div>
    );
  }
}

export default connect(null)(SearchBox);
