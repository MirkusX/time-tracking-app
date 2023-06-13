import styled from "styled-components";

export const BackgroundSection = styled.section`
  background-color: #0d1323;
  min-height: 100vh;
`;

export const LargeCardDivInside = styled.div`
  background-color: #5746ea;
  border-radius: 20px;
`;

export const LargeCardDiv = styled.div`
  background-color: #1d204b;
  width: 20%;
  text-align: left;
  border-radius: 20px;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  border: white 3px solid;
  width: 50%;
  margin: 1em 0 0 1em;
`;

export const InsideDiv = styled.div`
  padding: 1em;
  ${(props) => {
    if (props.margin)
      return `
    padding: 5em 1em;
    width: 80%;
    color: white;`;
  }}
`;

export const LargeP = styled.p`
  font-size: 2.46rem;
  margin: 0;
`;

export const NoMarginP = styled.p`
  margin: 0;
`;
