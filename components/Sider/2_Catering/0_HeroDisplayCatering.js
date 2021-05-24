import { HeroContainerUtenPadding } from "../../Små/BaseElementer";
import { HeroDisplayFull } from "../../Store/HeroDisplayFull";

const HeroDisplayCatering = ({}) => {
  return (
    <HeroContainerUtenPadding id="HeroDisplayCatering" c="pt-80">
      <HeroDisplayFull
        src={"v1619771802/Italiensk Demo Side/forbereder-skinke-fat.jpg"}
        alt="En servitør forberder et skinke fat"
        tittel="CATERING"
        brodteks={
          <>
            The mission is simple: serve delicious, affordable food
            <br className="hidden lg:block" /> that guests will want to return
            to week after week
          </>
        }
      />
    </HeroContainerUtenPadding>
  );
};

export default HeroDisplayCatering;
