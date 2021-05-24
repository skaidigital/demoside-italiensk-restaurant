import {
  Grid,
  GridItem,
  Layout,
  SectionContainer,
} from "../../Små/BaseElementer";
import { MainButton } from "../../Små/Buttons";

const Kontaktskjema = () => {
  return (
    <SectionContainer>
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-start-2 md:col-span-6 lg:col-span-5 lg:col-start-2 flex content-center mt-32">
            <div className="flex flex-col">
              <h2 className="text-black text-h2">
                Velkommen til Habibi – i “Strøget-passasjen” i Oslo sentrum
              </h2>
              <p className="my-16">
                Nyt eksotiske hovedretter og Mezahspesialiteter i en trivelig
                tilbakelent atmosære – Habibi ønsker gamle og nye gjester
                velkommen!
              </p>
              <p className="mb-24">
                Velkommen til Habibi – Oslos Mezahklassiker!
              </p>
              <h2 className="text-black font-bold mb-8 text-p">
                Ta kontakt med oss!
              </h2>
              <p>
                <span className="font-bold">Epost:</span> post@campo.no
              </p>
              <p>
                <span className="font-bold">Telefon:</span> 924 32 222
              </p>
              <p>
                <span className="font-bold">Adresse:</span> Josefinesgate 23,
                0351 Oslo
              </p>
              <p>
                <span className="font-bold">Facebook:</span> raviolis
              </p>
              <p>
                <span className="font-bold">Instagram:</span> raviolis
              </p>
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-start-2 md:col-span-6 lg:col-span-4 lg:col-start-8 mt-32 content-center">
            <div className="flex flex-col">
              <h2 className="text-black text-h3 mb-24">
                Lurer du på noe? <br></br> Send oss en melding!
              </h2>
              <form className="w-auto">
                <label className="flex flex-col my-8">
                  Navn
                  <input
                    className="border-2 border-lys p-8 my-8"
                    type="text"
                    name="navn"
                    placeholder="Skriv navnet ditt her"
                  ></input>
                </label>
                <label className="flex flex-col my-8">
                  E-post
                  <input
                    className="border-2 border-lys p-8 my-8"
                    type="text"
                    placeholder="Skriv e-posten din her"
                  ></input>
                </label>
                <label className="flex flex-col my-8">
                  Telefon
                  <input
                    className="border-2 border-lys p-8 my-8"
                    type="text"
                    placeholder="Skriv inn ditt telefonnummer her"
                  ></input>
                </label>
                <label className="flex flex-col my-8 mb-24">
                  Melding
                  <input
                    className="border-2 border-lys p-8 my-8 pb-48"
                    type="text"
                    placeholder="Srkiv inn din melding her"
                  ></input>
                </label>
                <MainButton btnText="Send inn" />
              </form>
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </SectionContainer>
  );
};

export default Kontaktskjema;
