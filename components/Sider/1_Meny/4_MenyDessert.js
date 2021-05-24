import { Dessert } from "../../Data/retter";
import {
  Grid,
  GridItem,
  Layout,
  SectionContainerUtenPadding,
} from "../../Små/BaseElementer";

const dessertene = Dessert.map(({ tittel, beskrivelse, pris }, id) => (
  <GridItem c="col-span-4">
    <div className="flex flex-row justify-between mb-8">
      <h3 className="text-h5 text-black font-semibold">{tittel}</h3>
      <p className="text-h5 font-serif text-black font-semibold">{pris}</p>
    </div>
    <p>{beskrivelse}</p>
  </GridItem>
));

const MenyDessert = () => {
  return (
    <SectionContainerUtenPadding>
      <Layout>
        <div className="flex md:justify-center mb-56">
          <h2 className="text-black mb-8 text-h2">DESSERT</h2>
        </div>
        <Grid c="mb-80">{dessertene}</Grid>
      </Layout>
    </SectionContainerUtenPadding>
  );
};

export default MenyDessert;
