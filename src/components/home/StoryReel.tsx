import React from "react";
import story_reel_one from "../../assets/story_reel_1.jpeg";
import story_reel_two from "../../assets/stroy_reel_two.png";
import story_reel_three from "../../assets/story_reel_3.jpg";
import story_reel_four from "../../assets/story_reel_4.jpg";

const StoryReel: React.FC = () => {
  return (
    <div>
      <div className="storyReel">
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: "url(" + story_reel_one + ")",
          }}
        >
          <img
            className="storyReel__avatar"
            src="https://avatars.githubusercontent.com/u/45945474?v=4"
            alt="Story"
          />
          <h4>Jide</h4>
          <h3>Abdul-Qudus</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: "url(" + story_reel_two + ")",
          }}
        >
          <img
            className="storyReel__avatar"
            src="https://avatars.githubusercontent.com/u/45945474?v=4"
            alt="Story"
          />
          <h4>Jide</h4>
          <h3>Abdul-Qudus</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage:
              "url(" +
              "https://cdn.pixabay.com/photo/2016/11/29/13/00/black-1869685_960_720.jpg" +
              ")",
          }}
        >
          <img
            className="storyReel__avatar"
            src="https://avatars.githubusercontent.com/u/45945474?v=4"
            alt="Story"
          />
          <h4>Jide</h4>
          <h3>Abdul-Qudus</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage:
              "url(" +
              "https://cdn.pixabay.com/photo/2016/11/29/13/00/black-1869685_960_720.jpg" +
              ")",
          }}
        >
          <img
            className="storyReel__avatar"
            src="https://avatars.githubusercontent.com/u/45945474?v=4"
            alt="Story"
          />
          <h4>Jide</h4>
          <h3>Abdul-Qudus</h3>
        </div>
      </div>
    </div>
  );
};

export default StoryReel;
