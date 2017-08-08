import React, { Component } from 'react';

import './TextPost.css';
class TextPost extends Component{
  constructor(props) {
    super(props);
  }

  //Some way of resizing
  render() {
    return (
      <div className="text">
        <div className="title">
          {this.props.post.title}
        </div>
        <div className="body" dangerouslySetInnerHTML={{__html: this.props.post.body}}>
        </div>
      </div>
    )
  }
};

export default TextPost
