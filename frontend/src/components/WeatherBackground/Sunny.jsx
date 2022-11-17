import styled, { keyframes } from "styled-components";

export default function Sunny() {
  const SunnyBg = styled.div`
  background: rgb(251,247,63);
  background: radial-gradient(circle, rgba(251,247,63,1) 0%, rgba(70,243,252,1) 33%);
    }
`;
  const Sun = styled.p`
    background: rgb(251, 247, 63);
    background: radial-gradient(
      circle,
      rgba(251, 247, 63, 1) 15%,
      rgba(70, 243, 252, 1) 70%
    );
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    box-shadow: 1rem, 1rem, 1rem, 1rem #fbf73f;
  `;

  const sunAnimation = keyframes`
  0% {
    transform:  scale(1);
}

100% {
    transform:  scale(3);
}
`;
  const AnimatedSun = styled(Sun)`
    animation: ${sunAnimation} 2.5s ease-in-out 0s infinite alternate none;
  `;

  return (
    <div>
      <AnimatedSun />
      <AnimatedSun />
      <AnimatedSun />
      <AnimatedSun />
    </div>
  );
}
