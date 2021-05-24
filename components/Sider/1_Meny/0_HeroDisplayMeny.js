import { HeroContainerUtenPadding } from "../../Små/BaseElementer";
import { HeroDisplayFull } from "../../Store/HeroDisplayFull";

const HeroDisplayMeny = () => {
  return (
    <HeroContainerUtenPadding id="HeroDisplayMeny" c="pt-80">
      <HeroDisplayFull
        src={"v1619771760/Italiensk Demo Side/pizzaoven.jpg"}
        alt="En pizza ovn"
        tittel="MENY"
        brodteks={
          <>
            The mission is simple: serve delicious, affordable food
            <br className="hidden md:block" /> that guests will want to return
            to week after week"
          </>
        }
      />
    </HeroContainerUtenPadding>
  );
};

export default HeroDisplayMeny;
