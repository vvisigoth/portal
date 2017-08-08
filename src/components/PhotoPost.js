import React, { Component } from 'react';

import './PhotoPost.css';
class PhotoPost extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let p = this.props.post.photos[0];
    return (
      <div className="photo">
        <div className="img">
          <img src={p['original-size']['url']}/>
        </div>
        <div className="caption">
        </div>
      </div>
    )
  }
};

export default PhotoPost
