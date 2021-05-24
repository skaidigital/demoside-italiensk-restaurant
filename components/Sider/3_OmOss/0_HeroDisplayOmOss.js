import Image from "next/image";
import { HeroContainerUtenPadding } from "../../Små/BaseElementer";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};

const HeroDisplayOmOss = () => {
  return (
    <HeroContainerUtenPadding id="HeroDisplayOmOss">
      <>
        <div className="flex relative h-510 z-1 mt-32">
          <div>
            <Image
              src={"v1619771687/Italiensk Demo Side/Kjøkken-servering.jpg"}
              alt="Bilde av et kjøkken."
              layout="fill"
              objectFit="cover"
              loader={myLoader}
              className="object-left"
            />
          </div>
        </div>
        {/* <div className="z-2 absolute -mt-80 inset-x-0 flex justify-center">
          <OmOssHistorie />
        </div> */}
      </>
    </HeroContainerUtenPadding>
  );
};

export default HeroDisplayOmOss;
