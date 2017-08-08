import React, { Component } from 'react';

import './VideoPost.css';

const ytUpdate = (string, width) => {
  let r = /width="(\d*)" height="(\d*)"/;
  let t = string.match(r);
  let w = parseInt(t[1]);
  let h = parseInt(t[2]);
  console.debug(h);
  let h2 = (h * width) / w;
  return string.replace(r, 'width="' + width + '" ' + 'height="' + h2 + '"');
};

class VideoPost extends Component{
  constructor(props) {
    super(props);
    this.measureDiv = this.measureDiv.bind(this);
    let p = this.props.post.player[0];
    this.state = {player: p['embed-code']};
  }

  componentDidMount() {
    this.measureDiv(); 
  }

  measureDiv() {
    let rect = this.refs.video.getBoundingClientRect();
    // people get mad at this, but otherwise it lags
    this.setState({player: ytUpdate(this.state.player, rect.width)});
  }

  //Some way of resizing
  render() {
    //let p = this.props.post.player[0];
    // get width
    //let nif = ytUpdate(p['embed-code'], 350);
    return (
      <div ref="video" className="video">
        <div className="play" dangerouslySetInnerHTML={{__html:this.state.player}}>
        </div>
        <div className="caption">
        </div>
      </div>
    )
  }
};

export default VideoPost
