import { Layout, SectionContainer } from "../../Små/BaseElementer";
import { PictureCard, PictureCardReversed } from "../../Store/Cards";

const InfoCardGroupCatering = () => {
  return (
    <SectionContainer>
      <Layout>
        <div className="mb-40 md:mb-80 lg:mb-160">
          <PictureCard
            src="v1619771771/Italiensk Demo Side/preparert-koltbord.jpg"
            alt="Bilde av et ferdig dekket bord, med ulike retter stående på."
            tittel="Smaken av italia"
            beskrivelse="Pizza er selve hjertet i Ravioli’s. Du har kanskje lagt merke til at vi har åpent pizzakjøkken i alle våre restauranter slik at du kan studere pizzakokkene i aksjon? Det er ikke uten grunn. Å lage italiensk pizza er et mesterverk i seg selv og pizzaiolo er et yrke som kommer med mye stolthet.
          Vi har alle de tradisjonelle pizzarettene, samt noen nyvinninger"
            buttonText="Les om oss"
            href="/om"
            height="3467"
            width="4993"
          />
        </div>
        <div className="mb-40 md:mb-80 lg:mb-160">
          <PictureCardReversed
            src="v1619771899/Italiensk Demo Side/pizza-kutting.jpg"
            alt="Kokk kutter opp pizza"
            tittel="Pizzafest"
            beskrivelse="Ravioli’s er deres spesielle stunder totalleverandør og spesialist i modern og klassisk italiensk kokekunst. Vi kan hjelpe dere med å planlegge alle de selskaper man skulle ønske: fra en intim bursdag fest med 20 gjester til et glitrende bryllup med 100 gjester, både her hos oss eller hjemme hos deg."
            buttonText="Ta kontakt"
            href="/kontakt"
            height="5760"
            width="3840"
          />
        </div>
        <div className="mb-40 md:mb-80 lg:mb-160">
          <PictureCard
            src="v1619771687/Italiensk Demo Side/pasta-bologenese.jpg "
            alt="Bilde av en pasta bologenese i en typ skål"
            tittel="Pizza & Sjømat"
            beskrivelse="Pizza er selve hjertet i Ravioli’s. Du har kanskje lagt merke til at vi har åpent pizzakjøkken i alle våre restauranter slik at du kan studere pizzakokkene i aksjon? Det er ikke uten grunn. Å lage italiensk pizza er et mesterverk i seg selv og pizzaiolo er et yrke som kommer med mye stolthet.
          Vi har alle de tradisjonelle pizzarettene, samt noen nyvinninger"
            buttonText="Les menyen"
            href="/meny"
            height="3939"
            width="5908"
          />
        </div>
      </Layout>
    </SectionContainer>
  );
};

export default InfoCardGroupCatering;

//   src,
//   alt,
//   tittel,
//   beskrivelse,
//   buttonText,
//   href,
