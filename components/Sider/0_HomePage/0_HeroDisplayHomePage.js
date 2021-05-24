import { Grid, GridItem, Layout } from "../../Små/BaseElementer";

const HeroDisplayHomePage = () => {
  return (
    <section id="HeroDisplayHomePage" className="pt-96 lg:pt-160">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 md:col-start-1 lg:col-start-2 lg:col-span-10">
            {/* <div className="lg:max-w-60 mx-auto align-center mt-120"> */}
            <p className="mb-8 lg:mb-24">ITALIENSK RESTAURANT I OSLO SENTRUM</p>
            <h1 className="mb-8 lg:mb-24">
              ITALIENSK MAT LAGD MED BESTEMORS OPPSKRIFT
            </h1>
            <p>
              Ravlio’s er restauranten som tar bestemors oppskrift inn i den
              moderne alder. Vi er stolte av maten vi lager, noe som du kommer
              til å merke når du smaker våre pizza- og pasteretter. Kom og besøk
              oss i Oslo sentrum!
            </p>
            {/* </div> */}
          </GridItem>
        </Grid>
      </Layout>
    </section>
  );
};

export default HeroDisplayHomePage;
