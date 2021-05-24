import Image from "next/image";
import { HeroContainerUtenPadding } from "../../Små/BaseElementer";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};

const ImageHomePage = () => {
  return (
    <HeroContainerUtenPadding id="ImageHomePage">
      <div className="relative">
        <div className="flex relative h-510">
          <Image
            src={"v1619771843/Italiensk Demo Side/fersk-pasta.jpg"}
            alt="Bilde av fersk pasta, sherrytomat og mozzarella"
            layout="fill"
            objectFit="cover"
            loader={myLoader}
            objectPosition="right"
          />
        </div>
        {/* <Bilde
          src={"v1619771843/Italiensk Demo Side/fersk-pasta.jpg"}
          alt="Bilde av fersk pasta, sherrytomat og mozzarella"
          h="2133"
          w="3200"
        /> */}
      </div>
    </HeroContainerUtenPadding>
  );
};

export default ImageHomePage;
