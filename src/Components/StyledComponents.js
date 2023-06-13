import styled from "styled-components";

export const BackgroundSection = styled.section`
  background-color: #0d1323;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LargeCardDivInside = styled.div`
  background-color: #5746ea;
  border-radius: 20px;
`;

export const LargeCardDiv = styled.div`
  background-color: #1d204b;
  width: 30%;
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

export const SmallCardDivBottom = styled.div`
  border-radius: 20px;
  background-color: #1d204b;
`;

export const SmallCardDivTop = styled.div`
  border-radius: 20px 20px 0 0;
  padding: 1em;
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  width: 100%;
`;

export const SizeDiv = styled.div`
  width: 80%;
  display: flex;
  gap: 1em;
`;
