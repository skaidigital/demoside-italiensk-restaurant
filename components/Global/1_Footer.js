import Link from "next/link";
import { FooterContainer, Layout } from "../Små/BaseElementer";

export const Footer = () => {
  return (
    <FooterContainer>
      <footer className="sticky bottom-0 bg-aksent text-hvit">
        <Layout>
          <div className="flex flex-col lg:flex-row justify-between py-40">
            <div className="flex flex-1 flex-col content-center">
              <span className="text-h1 font-bold">Raviolis</span>
            </div>
            <div className="flex flex-1 flex-col my-24 lg:my-0">
              <h2 className="text-h4 font-semibold text-hvit">Navigasjon</h2>
              <Link href="/">
                <a className="py-4">Hjem</a>
              </Link>
              <Link href="/meny">
                <a className="py-4">Meny</a>
              </Link>

              <Link href="/catering">
                <a className="py-4">Catering</a>
              </Link>
              <Link href="/om">
                <a className="py-4">Om oss</a>
              </Link>
              <Link href="/kontakt">
                <a className="py-4">Book bord</a>
              </Link>
            </div>
            <div className="flex flex-1 my-24 lg:my-0 flex-col">
              <h2 className="text-h4 font-bold text-hvit">
                Ta kontakt med oss!
              </h2>
              <p className="py-4">
                <span className="font-bold">Epost:</span>{" "}
                <a href="mailto:post@campo.no">post@campo.no</a>
              </p>
              <p className="py-4">
                <span className="font-bold">Telefon:</span>{" "}
                <a href="tel:92432222">924 32 222</a>
              </p>
              <p className="py-4">
                <span className="font-bold">Adresse:</span> Josefinesgate 23,
                0351 Oslo
              </p>
              <p className="py-4">
                <span className="font-bold">Facebook:</span> raviolis
              </p>
              <p className="py-4">
                <span className="font-bold">Instagram:</span> raviolis
              </p>
            </div>
          </div>
        </Layout>
      </footer>
    </FooterContainer>
  );
};
