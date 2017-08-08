import React, { Component } from 'react';

import './VideoPost.css';
class VideoPost extends Component{
  constructor(props) {
    super(props);
  }

  //Some way of resizing
  render() {
    let p = this.props.post.player[0];
    return (
      <div className="video">
        <div className="play" dangerouslySetInnerHTML={{__html:p['embed-code']}}>
        </div>
        <div className="caption">
        </div>
      </div>
    )
  }
};

export default VideoPost
