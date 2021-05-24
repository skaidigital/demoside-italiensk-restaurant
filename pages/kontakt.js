import { NextSeo } from "next-seo";
import { NavBar } from "../components/Global/0_Navbar";
import Kontaktskjema from "../components/Sider/4_Kontaktside/0_Kontaktskjema";
import KartKontakt from "../components/Sider/4_Kontaktside/1_KartKontakt";

function KontaktSide() {
  return (
    <>
      <NextSeo
        title="8 Harde fakta om hvorfor du MÅ ha en rask nettside i 2021"
        description="I denne artikkelen vil du lære 8 fakta om hvorfor det er et krav å ha en lynrask nettside i 2021"
        openGraph={{
          title: "8 Harde fakta om hvorfor du MÅ ha en rask nettside i 2021",
          description:
            "I denne artikkelen vil du lære 8 fakta om hvorfor det er et krav å ha en lynrask nettside i 2021",
          images: [
            {
              url: "https://res.cloudinary.com/skai-digital/image/upload/v1620723853/Skai%20Digital%20website/blogg/rask-nettside/rask-nettside.jpg",
              width: "3200",
              height: "2130",
              alt: "Bilde av laptop med koderedigeringsprogram oppe",
            },
          ],
        }}
        twitter={{
          handle: "@skai_digital",
          site: "@skaidigital",
          cardType: "summary_large_image",
        }}
      />
      <NavBar type="strek" />

      <Kontaktskjema />
      <KartKontakt />

      {/* <Footer /> */}
    </>
  );
}

export default KontaktSide;
