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
      <NextSeo title="Demo Forside" description="Dette er en demoforside" />
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
