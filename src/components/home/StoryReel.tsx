import React from "react";
import { assets } from "../../constants";

const StoryReel: React.FC = () => {
  return (
    <div>
      <div className="storyReel">
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: `url(${assets.story_reel_one})`,
          }}
        >
          <img
            className="storyReel__avatar"
            src={assets.avatar_one}
            alt="Story"
          />
          <h4>Jide</h4>
          <h3>Abdul-Qudus</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: `url(${assets.story_reel_two})`,
          }}
        >
          <img
            className="storyReel__avatar"
            src={assets.avatar_two}
            alt="Story"
          />
          <h4>Moyin</h4>
          <h3>Okeleye</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: `url(${assets.story_reel_three})`,
          }}
        >
          <img
            className="storyReel__avatar"
            src={assets.avatar_three}
            alt="Story"
          />
          <h4>Kags</h4>
          <h3>Ademola</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: `url(${assets.story_reel_four})`,
          }}
        >
          <img
            className="storyReel__avatar"
            src={assets.avatar_four}
            alt="Story"
          />
          <h4>Aisha</h4>
          <h3>Abdul-Azeez</h3>
        </div>
        <div
          className="storyReel__bg"
          style={{
            backgroundImage: `url(${assets.story_reel_five})`,
          }}
        >
          <img
            className="storyReel__avatar"
            src={assets.avatar_five}
            alt="Story"
          />
          <h4>John</h4>
          <h3>Hardeyboy</h3>
        </div>
      </div>
    </div>
  );
};

export default StoryReel;
