import { LayoutOmOss } from "../../Små/BaseElementer";
import { MainButton, SecondaryButton } from "../../Små/Buttons";

const OmOssHistorie = () => {
  return (
    <LayoutOmOss>
      <div className="position lg:relative z-3 lg:-mt-200 bg-hvit flex flex-col mb-160">
        <p className="pt-24 mb-8 text-center text-p">OM OSS</p>
        <div className="mb-16 text-center">
          <h1>VÅR HISTORIE</h1>
        </div>
        <div className="flex flex-col px-24">
          <p className="mb-32 italic">
            Global Gourmet Catering creates incomparable experiences through
            customized food, beverage and event services, using sustainable
            practices and a customer service-driven team to exceed our clients'
            expectations.
          </p>
          <p className="mb-32 ">
            Partners David Ashley and Laura Lyons started the company in 1999
            with a mission to bring high-end restaurant caliber cuisine and
            service to a catering industry that was up until then accustomed to
            hotel banquet standards. Their restaurant ownership, service and
            management backgrounds enabled them to think outside the "catering
            box," leading to the development of such catering firsts as
            large-scale multi-ethnic stations menus.
          </p>
          <p className="mb-32 ">
            Global Gourmet has emerged as the San Francisco Bay Area's leading
            full-service catering company on the strength of our commitment to
            delivering exquisite cuisine, highly customized menus, trend-setting
            design, impeccable service and expert on-site execution with
            attention to every detail while meeting our clients' varying
            budgetary requirements.
          </p>
          <p className="mb-32 ">
            We are the only catering company in Northern California in which our
            sales and beverage management team members are all Level One Master
            Sommelier certified, bringing food and beverage pairing
            opportunities to a whole new level.
          </p>
          <p className="mb-32 ">
            While we are often referred to as "the tech caterer" among our
            industry because of our ability to provide cutting-edge menus,
            innovative thinking and creativity, and over-the-top customer
            service for our corporate clients like Apple, Facebook, Google,
            Twitter and LinkedIn, we also work with wide range of companies in
            the retail, legal, financial services, education and destination
            management sectors as well, to name a few.
          </p>
          <p className="mb-32 ">
            We are also proud to have the opportunity to work with non-profit
            organizations like Bridge School, the San Francisco AIDS Foundation
            and X-Prize, and often partner with premier event planning and
            production companies to ensure the highest quality food and beverage
            catering service programs possible.
          </p>
          <div className="flex flex-col md:flex-row my-24">
            <MainButton btnText="Se vår meny" href="/meny" />
            <SecondaryButton
              btnText="Les om catering"
              c="my-12 md:my-0 md:ml-24"
              href="/catering"
            />
          </div>
        </div>
      </div>
    </LayoutOmOss>
  );
};

export default OmOssHistorie;
