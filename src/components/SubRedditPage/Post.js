import React from "react";

class Post extends React.Component {
  state = { count: 6 };
  increment = () => {
    this.setState(prevstate => ({ count: prevstate.count + 1 }));
  };
  decrement = () => {
    this.setState(prevstate => ({ count: prevstate.count - 1 }));
  };
  render() {
    return (
      <div className="post">
        <div className="votes">
          <img
            onClick={this.increment}
            className="upvote"
            alt="upvote"
            src="https://image.flaticon.com/icons/svg/2316/2316622.svg"
          />
          <p>{this.state.count}</p>
          <img
            onClick={this.decrement}
            className="downvote"
            alt="downvote"
            src="https://image.flaticon.com/icons/svg/2316/2316643.svg"
          />
        </div>

        <div className="post-right">
          <div className="post-user">Posted by u/{this.props.name}</div>
          <div className="post-text">{this.props.text}</div>
          <div className="lowerBar">
            <div className="comment-head">4 Comments</div>
            <div className="comment-head">Share</div>
            <div className="comment-head">Save</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
