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
      <NextSeo title="Demo Forside" description="Dette er en demoforside" />
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
