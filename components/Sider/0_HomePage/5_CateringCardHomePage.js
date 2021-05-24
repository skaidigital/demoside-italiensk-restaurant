import { SectionContainer, Layout } from "../../Små/BaseElementer";
import { PictureCardReversed } from "../../Store/Cards";

const CateringCardHomePage = () => {
  return (
    <SectionContainer>
      <Layout>
        <PictureCardReversed
          src={"v1619771736/Italiensk Demo Side/utvalgAvMat.jpg"}
          alt="preview bilde av webutvikling prosjekt"
          tittel="Catering i verdensklasse"
          beskrivelse="Ravioli’s er deres spesielle stunder totalleverandør og spesialist i modern og klassisk italiensk kokekunst. Vi kan hjelpe dere med å planlegge alle de selskaper man skulle ønske: fra en intim bursdag fest med 20 gjester til et glitrende bryllup med 100 gjester, både her hos oss eller hjemme hos deg."
          buttonText="Les om vår cateringstjeneste"
          href="/"
          height={"4032"}
          width={"3074"}
        />
      </Layout>
    </SectionContainer>
  );
};

export default CateringCardHomePage;
