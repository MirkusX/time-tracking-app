import { LargeCard } from "../Components/LargeCard";
import { SmallCard } from "../Components/SmallCard";
import { BackgroundSection } from "../Components/StyledComponents";

export const Frontpage = () => {
  return (
    <BackgroundSection>
      <div>
        <LargeCard />
      </div>
      <div>
        <SmallCard />
      </div>
    </BackgroundSection>
  );
};
