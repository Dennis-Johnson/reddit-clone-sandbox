import React from "react";
import Post from "./Post";
import SubCard from "./SubCard";

class SubReddit extends React.Component {
  state;
  render() {
    return (
      <div className="SubReddit">
        <h2 className="post-head"> Posts</h2>
        <div className="main-wrapper">
          <div className="Post-List">
            <Post name="jon_snow" text="I know nothing" />
            <Post name="lolipop" text="Check this out!" />
            <Post name="van_halen" text="Jump" />
            <Post name="prince" text="Gentlemen, let's broaden our minds!" />
          </div>
          <SubCard />
        </div>
      </div>
    );
  }
}
export default SubReddit;
