import { NextSeo } from "next-seo";
import { NavBar } from "../components/Global/0_Navbar";
import { Footer } from "../components/Global/1_Footer";
import HeroDisplayOmOss from "../components/Sider/3_OmOss/0_HeroDisplayOmOss";
import OmOssHistorie from "../components/Sider/3_OmOss/1_OmOssHistorie";

function OmOss() {
  return (
    <>
      <NextSeo title="Demo Forside" description="Dette er en demoforside" />
      <NavBar type="strek" />
      <HeroDisplayOmOss />
      <OmOssHistorie />
      <Footer />
    </>
  );
}

export default OmOss;
