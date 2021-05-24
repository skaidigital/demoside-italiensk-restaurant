import { Pasta } from "../../Data/retter";
import {
  Grid,
  GridItem,
  Layout,
  SectionContainerUtenPadding,
} from "../../Små/BaseElementer";

const Pastaene = Pasta.map(({ tittel, beskrivelse, pris }, id) => (
  <GridItem c="col-span-4">
    <div className="flex flex-row justify-between mb-8">
      <h3 className="text-h5 text-dark font-semibold">{tittel}</h3>
      <p className="text-h5 font-serif text-dark font-semibold">{pris}</p>
    </div>
    <p>{beskrivelse}</p>
  </GridItem>
));

const MenyPasta = () => {
  return (
    <SectionContainerUtenPadding>
      <Layout>
        <div className="flex md:justify-center mb-56">
          <h2 className="text-dark mb-8 text-h2">PASTA</h2>
        </div>
        <Grid c="mb-80">{Pastaene}</Grid>
      </Layout>
    </SectionContainerUtenPadding>
  );
};

export default MenyPasta;
