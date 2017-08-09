import React, { Component } from 'react';
import loading from './loading.gif';
import './App.css';

import PhotoPost from './components/PhotoPost';
import VideoPost from './components/VideoPost';
import TextPost from './components/TextPost';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    feed: state.feed,
    urb: state.urb
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
    if (!props.feed) {
      props.feed = {tumblr: []};
    }
  };

  componentDidUpdate() {
    console.debug(this.props);
  };

  renderPosts(x) {
    if (!this.props.feed.tumblr) {
      return
    } else {
      return this.props.feed.tumblr.map((k, i) => {
        if (i % 4 == x) {
          switch (k.type) {
            case 'photo': 
              return (<PhotoPost key={k.id} post={k}></PhotoPost>);
            break
            case 'video':
              return (<VideoPost key={k.id} post={k}></VideoPost>);
            break
            case 'text':
              return (<TextPost key={k.id} post={k}></TextPost>);
            break
            default:
              return;
          }
        } else {
          return;
        }
      });
    };
  };
  render() {
    return (
      <div className="App">
        <div id="col0" className="column">
          {this.renderPosts(0)}
        </div>
        <div id="col1" className="column">
          {this.renderPosts(1)}
        </div>
        <div id="col2" className="column">
          {this.renderPosts(2)}
        </div>
        <div id="col3" className="column">
          {this.renderPosts(3)}
        </div>
        <div id="loading-indicator" className={this.props.loading ? 'show' : 'hide'}>
          <img src={loading}/>
        </div>
        <div className={this.props.urb.subscribed ? 'show more' : 'hide more'} onClick={this.handleRefresh}>
          MOAR
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
