import Link from "next/link";
import { Layout } from "../Små/BaseElementer";
import { MainButton } from "../Små/Buttons";

export const DesktopNav = ({ farge }) => {
  return (
    <Layout>
      <div className="">
        <div className="py-32">
          <div className="lg:flex justify-between self-center">
            <div className="flex justify-between relative">
              <Link href="/">
                <a
                  className={`mt-8 text-${farge} no-decoration text-h3 md:text-h4 lg:text-h3 font-bold cursor-pointer`}
                >
                  Ravilio's
                </a>
              </Link>
              {/* <div className="lg:hidden">
                  <Hamburger
                    toggled={open}
                    toggle={setOpen}
                    easing="ease-in"
                    rounded
                    label="Vis meny"
                    hideOutline={false}
                  />
                </div> */}
            </div>
            <div className="hidden lg:flex items-center">
              <Link href="/">
                <a
                  className={`text-${farge} text-nav font-semibold flex align-middle mr-24 hover:text-cta focus:text-cta `}
                >
                  Hjem
                </a>
              </Link>
              <Link href="/meny">
                <a
                  className={`text-${farge} text-nav font-semibold flex align-middle mr-24 hover:text-cta focus:text-cta `}
                >
                  Meny
                </a>
              </Link>
              <Link href="/catering">
                <a
                  className={`text-${farge} text-nav font-semibold flex align-middle mr-24 hover:text-cta focus:text-cta `}
                >
                  Catering
                </a>
              </Link>
              <Link href="/om">
                <a
                  className={`text-${farge} text-nav font-semibold flex align-middle mr-24 hover:text-cta focus:text-cta `}
                >
                  Om Oss
                </a>
              </Link>
              <Link href="/kontakt">
                <a
                  className={`text-${farge} text-nav font-semibold flex align-middle mr-24 hover:text-cta focus:text-cta `}
                >
                  Kontakt
                </a>
              </Link>
              <div className="">
                <MainButton btnText="Bestill Bord" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
