import {
  InsideDiv,
  LargeCardDiv,
  LargeCardDivInside,
  LargeP,
  NoMarginP,
  PictureDiv,
  StyledImage,
} from "./StyledComponents";
import jeremy from "../Images/image-jeremy.png";

export const LargeCard = () => {
  return (
    <LargeCardDiv>
      <LargeCardDivInside>
        <StyledImage src={jeremy} />
        <InsideDiv margin>
          <NoMarginP>Report for</NoMarginP>
          <LargeP>Jeremy Robson</LargeP>
        </InsideDiv>
      </LargeCardDivInside>
      <InsideDiv>
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </InsideDiv>
    </LargeCardDiv>
  );
};
