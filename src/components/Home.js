import React from "react";
import {
  HomeContainer,
  HomeTopContainer,
  HomeBottomContainer,
  ProfileImage,
} from "../style/HomeElements";
import profilePicture from "../assets/profile/profile.png";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTopContainer>
        <div>
          <ProfileImage src={profilePicture} alt="" />
          <div>
            <span>Icon</span>
            <span>Icon</span>
            <span>Icon</span>
          </div>
        </div>
        <div>
          <p>
            PORTFOLIO : <span>KARAN MANN</span>
          </p>
          <p>Frontend Developer</p>
        </div>
      </HomeTopContainer>
      <HomeBottomContainer>
        <p>
          "Hello! I am a frontend developer with a passion for coding and
          solving problems that matter and to create awesome and meaningful
          products for people to love ❤️. I also have a background in culinary
          arts 👨‍🍳."
        </p>
      </HomeBottomContainer>
    </HomeContainer>
  );
};

export default Home;
