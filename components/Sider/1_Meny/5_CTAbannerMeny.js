import {
  SectionContainer,
  SectionContainerUtenPadding,
} from "../../Små/BaseElementer";
import { CTAbanner } from "../../Store/CTAbannerMal";

const CTAbannerMeny = () => {
  return (
    <SectionContainerUtenPadding>
      <CTAbanner
        src={"v1619771894/Italiensk Demo Side/restauranten.jpg"}
        alt="Bilde av resturanten"
        tittel="Book Bord"
        brodteks="Vi har gjenåpnet restauranten, og du kan bestille bord når det passer deg best!"
        btnText="Bestill Bord"
      />
    </SectionContainerUtenPadding>
  );
};

export default CTAbannerMeny;
