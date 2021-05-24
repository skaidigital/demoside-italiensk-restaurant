import { NextSeo } from "next-seo";
import { NavBar } from "../components/Global/0_Navbar";
import { Footer } from "../components/Global/1_Footer";
import HeroDisplayCatering from "../components/Sider/2_Catering/0_HeroDisplayCatering";
import InfoCardGroupCatering from "../components/Sider/2_Catering/1_InfoCardGroupCatering";

function Catering() {
  return (
    <>
      <NextSeo title="Demo Forside" description="Dette er en demoforside" />
      <NavBar farge="hvit" type="strek-hvit" />

      <HeroDisplayCatering />

      <InfoCardGroupCatering />
      <Footer />
    </>
  );
}

export default Catering;
