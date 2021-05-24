import Link from "next/link";
import React, { useState } from "react";
import { Layout } from "../Små/BaseElementer";

export const Mobilenav = ({ farge, type }) => {
  const [showMobilenav, setShowMobilenav] = useState(false);

  return (
    <React.Fragment className="border-2 border-hvit w-0100">
      {showMobilenav ? (
        <Layout>
          <div className="ml-24 py-24 pb-56 z-100">
            <div className="flex justify-between mb-24">
              <div>
                <Link href="/">
                  <a>
                    <p
                      className={`text-${farge} text-h3 font-semibold flex mb-0 self-center`}
                    >
                      Ravilio's
                    </p>
                  </a>
                </Link>
              </div>
              <div
                className={`${type}`}
                onClick={() => setShowMobilenav(!showMobilenav)}
              ></div>
            </div>
            <ul className="p-56 bg-hvit">
              <Link href="/">
                <li className="text-h3 font-semibold text-dark my-16 border-b-2">
                  Hjem
                </li>
              </Link>
              <Link href="/meny">
                <li className="text-h3 font-semibold text-dark my-16 border-b-2">
                  Meny
                </li>
              </Link>
              <Link href="/catering">
                <li className="text-h3 font-semibold text-dark my-16 border-b-2">
                  Catering
                </li>
              </Link>
              <Link href="/om">
                <li className="text-h3 font-semibold text-dark my-16 border-b-2">
                  Om Oss
                </li>
              </Link>
              <Link href="/kontakt">
                <li className="text-h3 font-semibold text-dark my-16 border-b-2">
                  Kontakt
                </li>
              </Link>
              <Link href="#bookBord">
                <li className="text-h3 font-semibold text-dark my-16 border-b-2">
                  Book et bord
                </li>
              </Link>
            </ul>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="ml-24 flex justify-between py-24">
            <p
              className={`text-${farge} text-h3 font-semibold flex mb-0 self-center`}
            >
              Ravilio's
            </p>

            <div
              className={`${type} flex self-center`}
              onClick={() => setShowMobilenav(!showMobilenav)}
            ></div>
          </div>
        </Layout>
      )}
    </React.Fragment>
  );
};
