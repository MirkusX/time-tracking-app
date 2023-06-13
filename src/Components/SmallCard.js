import { SmallCardArr } from "./SmallCardArr";
import {
  NoMarginP,
  SmallCardDivBottom,
  SmallCardDivTop,
} from "./StyledComponents";

export const SmallCard = () => {
  return (
    <>
      {SmallCardArr.map((item, index) => {
        return (
          <>
            <SmallCardDivBottom>
              <SmallCardDivTop
                style={{ backgroundColor: item.colorTop }}
              ></SmallCardDivTop>
              <NoMarginP>{item.title}</NoMarginP>
              <p>{item.hours}</p>
              <p>Last Week - {item.lasthours}</p>
            </SmallCardDivBottom>
          </>
        );
      })}
    </>
  );
};
