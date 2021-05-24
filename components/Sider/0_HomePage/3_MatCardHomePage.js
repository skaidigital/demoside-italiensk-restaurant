import { Layout, SectionContainer } from "../../Små/BaseElementer";
import { PictureCard } from "../../Store/Cards";

const MatCardHomePage = () => {
  return (
    <SectionContainer>
      <Layout>
        <div className="flex justify-center mb-80">
          <h2 className="text-h1">Mat i verdensklasse</h2>
        </div>
        <PictureCard
          src={"v1619771873/Italiensk Demo Side/preparerePizza.jpg"}
          alt="preview bilde av webutvikling prosjekt"
          tittel="Klassisk italiensk mat"
          beskrivelse="Pizza er selve hjertet i Ravioli’s. Du har kanskje lagt merke til at vi har åpent pizzakjøkken i alle våre restauranter slik at du kan studere pizzakokkene i aksjon? Det er ikke uten grunn. Å lage italiensk pizza er et mesterverk i seg selv og pizzaiolo er et yrke som kommer med mye stolthet.
          Vi har alle de tradisjonelle pizzarettene, samt noen nyvinninger"
          buttonText="Les menyen"
          href="/"
          height="3200"
          width="3002"
        />
      </Layout>
    </SectionContainer>
  );
};

export default MatCardHomePage;
