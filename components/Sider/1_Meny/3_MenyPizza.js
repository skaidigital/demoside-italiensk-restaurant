import { Pizza } from "../../Data/retter";
import {
  Grid,
  GridItem,
  Layout,
  SectionContainerUtenPadding,
} from "../../Små/BaseElementer";

const pizzaene = Pizza.map(({ tittel, beskrivelse, pris }, id) => (
  <GridItem c="col-span-4">
    <div className="flex flex-row justify-between mb-8">
      <h3 className="text-h5 text-black font-semibold">{tittel}</h3>
      <p className="text-h5 font-serif text-black font-semibold">{pris}</p>
    </div>
    <p>{beskrivelse}</p>
  </GridItem>
));

const MenyPizza = () => {
  return (
    <SectionContainerUtenPadding>
      <Layout>
        <div className="flex md:justify-center mb-56">
          <h2 className="text-black mb-8 text-h2">PIZZA</h2>
        </div>
        <Grid c="mb-80">{pizzaene}</Grid>
      </Layout>
    </SectionContainerUtenPadding>
  );
};

export default MenyPizza;
