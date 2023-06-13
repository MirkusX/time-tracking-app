import { LargeCard } from "../Components/LargeCard";
import { SmallCard } from "../Components/SmallCard";
import {
  BackgroundSection,
  GridDiv,
  SizeDiv,
} from "../Components/StyledComponents";

export const Frontpage = () => {
  return (
    <BackgroundSection>
      <SizeDiv>
        <LargeCard />
        <GridDiv>
          <SmallCard />
        </GridDiv>
      </SizeDiv>
    </BackgroundSection>
  );
};
