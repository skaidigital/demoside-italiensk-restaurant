import { SectionContainerUtenPadding } from "../../Små/BaseElementer";
import { CTAbanner } from "../../Store/CTAbannerMal";

const CTAbannerHomePage = () => {
  return (
    <SectionContainerUtenPadding>
      <CTAbanner
        src={"v1619771894/Italiensk Demo Side/restauranten.jpg"}
        alt="Bilde av resturanten"
        tittel="Book Bord"
        brodteks={
          <>
            Vi har gjenåpnet restauranten, og du kan bestille
            <br className="hidden lg:block" /> bord når det passer deg best!"
          </>
        }
        btnText="Bestill Bord"
      />
    </SectionContainerUtenPadding>
  );
};

export default CTAbannerHomePage;
