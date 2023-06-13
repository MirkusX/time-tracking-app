import { SmallCardArr } from "./SmallCardArr";
import { SmallCardDivBottom, SmallCardDivTop } from "./StyledComponents";

export const SmallCard = () => {
  return (
    <>
      {SmallCardArr.map((item, index) => {
        return (
          <>
            <SmallCardDivTop
              style={{ backgroundColor: item.colorTop }}
            ></SmallCardDivTop>
            <SmallCardDivBottom>
              <p>{item.title}</p>
              <p>{item.hours}</p>
              <p>Last Week - {item.lasthours}</p>
            </SmallCardDivBottom>
          </>
        );
      })}
    </>
  );
};
