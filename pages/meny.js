import { NextSeo } from "next-seo";
import { NavBar } from "../components/Global/0_Navbar";
import { Footer } from "../components/Global/1_Footer";
import HeroDisplayMeny from "../components/Sider/1_Meny/0_HeroDisplayMeny";
import MenyForrett from "../components/Sider/1_Meny/1_MenyForrett";
import MenyPasta from "../components/Sider/1_Meny/2_MenyPasta";
import MenyPizza from "../components/Sider/1_Meny/3_MenyPizza";
import MenyDessert from "../components/Sider/1_Meny/4_MenyDessert";
import CTAbannerMeny from "../components/Sider/1_Meny/5_CTAbannerMeny";

function Meny() {
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
      <NavBar farge="hvit" type="strek-hvit" />

      <HeroDisplayMeny />
      <MenyForrett />
      <MenyPasta />
      <MenyPizza />
      <MenyDessert />
      <CTAbannerMeny />
      <Footer />
    </>
  );
}

export default Meny;
