import React from "react";
import styled, { keyframes } from "styled-components";

const rainbow = (start) => keyframes`
    from{
        filter: hue-rotate(${start}deg)
    }
    to{
        filter: hue-rotate(${start + 360}deg)
    }
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.primary2}
  );

  position: sticky;
  top: 0;
`;

const RainbowText = styled.span`
  color: #1eff00;
  font-size: 1.5rem;
  font-weight: bold;
  animation: ${(props) => rainbow(props.startingHueDegree)} 3s linear infinite;
`;

export default function TopBar() {
  return (
    <Container>
      <div>
        {"Tiny Animation Project".split("").map((char, index) => (
          <RainbowText id={index} startingHueDegree={index * 20}>
            {char}
          </RainbowText>
        ))}
      </div>
    </Container>
  );
}
