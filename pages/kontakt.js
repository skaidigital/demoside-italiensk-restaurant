import { NextSeo } from "next-seo";
import { NavBar } from "../components/Global/0_Navbar";
import { Footer } from "../components/Global/1_Footer";
import Kontaktskjema from "../components/Sider/4_Kontaktside/0_Kontaktskjema";
import KartKontakt from "../components/Sider/4_Kontaktside/1_KartKontakt";

function KontaktSide() {
  return (
    <>
      <NextSeo title="Demo Forside" description="Dette er en demoforside" />
      <NavBar type="strek" />

      <Kontaktskjema />
      <KartKontakt />

      {/* <Footer /> */}
    </>
  );
}

export default KontaktSide;
