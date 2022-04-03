import styled from "styled-components";
import backgroundImage from "../assets/background/wp7952670.jpeg";

export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  height: 90vh;
`;

export const HomeTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const HomeBottomContainer = styled.div``;

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 0.2rem solid white;
`;
