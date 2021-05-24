import Link from "next/link";
import {
  Grid,
  GridItem,
  Layout,
  SectionContainer,
} from "../../Små/BaseElementer";

const InfoCardHomePage = () => {
  return (
    <SectionContainer>
      <Layout>
        <Grid>
          <GridItem c="col-span-4 lg:col-span-3 lg:col-start-1 flex content-center">
            <div className="flex flex-col">
              <h2 className="text-dark text-h4 font-semibold">Lokasjon</h2>
              <p className="my-24">Josefinesgate 23, 0351 Oslo</p>
              <a href="tel:92443222">
                {" "}
                <p className="rounded-rund border-2 px-24 py-8 text-center">
                  Ring oss på 924 43 222
                </p>
              </a>
              {/* <SecondaryButton btnText="Ring oss på 924 43 222" /> */}
            </div>
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-3 lg:col-start-5">
            <div className="flex flex-1 flex-col">
              <h2 className="text-dark text-h4 font-semibold mb-8">
                Navigasjon
              </h2>
              <Link href="/meny">
                <a className="py-8">Meny</a>
              </Link>
              <Link href="/kontakt">
                <a className="py-8">Book bord</a>
              </Link>
              <Link href="/catering">
                <a className="py-8">Catering</a>
              </Link>
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col">
              <h2 className="text-dark text-h4 font-semibold mb-8">
                Åpningstider
              </h2>
              <div className="border-b-2 pb-8 border-dark border-dark flex justify-between">
                <p>Mandag</p>
                <p>Stengt</p>
              </div>
              <div className="border-b-2 border-dark pb-8 w-0100 flex justify-between">
                <p>Tirsdag - Torsdag</p>
                <p>11:00-21:00</p>
              </div>
              <div className="border-b-2 border-dark pb-8 w-0100 flex justify-between">
                <p>Fredag</p>
                <p>11:00-24:00</p>
              </div>
              <div className="border-b-2 border-dark pb-8 w-0100 flex justify-between">
                <p>Lørdag</p>
                <p>11:00-24:00</p>
              </div>
              <div className="border-b-2 border-dark pb-8 w-0100 flex justify-between">
                <p>Søndag</p>
                <p>11:00-21:00</p>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </SectionContainer>
  );
};

export default InfoCardHomePage;
