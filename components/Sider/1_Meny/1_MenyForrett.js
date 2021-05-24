import { Forret } from "../../Data/retter";
import {
  Grid,
  GridItem,
  Layout,
  SectionContainerUtenPadding,
} from "../../Små/BaseElementer";

const forettene = Forret.map(({ tittel, beskrivelse, pris }, id) => (
  <GridItem c="col-span-4">
    <div className="flex flex-row justify-between mb-8">
      <h3 className="text-h5 text-black font-semibold">{tittel}</h3>
      <p className="text-h5 font-serif text-black font-semibold">{pris}</p>
    </div>
    <p>{beskrivelse}</p>
  </GridItem>
));

const MenyForrett = () => {
  return (
    <SectionContainerUtenPadding>
      <Layout>
        <div className="flex md:justify-center mt-56 mb-56 ">
          <h2 className="text-black mb-8 text-h2">FORRETT</h2>
        </div>
        <Grid c="mb-80">{forettene}</Grid>
      </Layout>
    </SectionContainerUtenPadding>
  );
};

export default MenyForrett;
