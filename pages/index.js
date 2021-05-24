import { NextSeo } from "next-seo";
import { NavBar } from "../components/Global/0_Navbar";
import { Footer } from "../components/Global/1_Footer";
import HeroDisplayHomePage from "../components/Sider/0_HomePage/0_HeroDisplayHomePage";
import ImageHomePage from "../components/Sider/0_HomePage/1_ImageHomePage";
import InfoCardHomePage from "../components/Sider/0_HomePage/2_InfoCardHomePage";
import MatCardHomePage from "../components/Sider/0_HomePage/3_MatCardHomePage";
import CTAbannerHomePage from "../components/Sider/0_HomePage/4_CTAbannerHomePage";
import CateringCardHomePage from "../components/Sider/0_HomePage/5_CateringCardHomePage";

function HomePage() {
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

      <HeroDisplayHomePage />
      <ImageHomePage />
      <InfoCardHomePage />
      <MatCardHomePage />
      <CTAbannerHomePage />
      <CateringCardHomePage />

      <Footer />
    </>
  );
}

export default HomePage;
