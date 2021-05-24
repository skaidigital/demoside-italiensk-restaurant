import Image from "next/image";
import { MainButton } from "../Små/Buttons";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};

export const PictureCard = ({
  src,
  alt,
  tittel,
  beskrivelse,
  buttonText,
  href,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-1 relative">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          loader={myLoader}
        />
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex flex-col max-w-80">
          <h3 className="text-h2">{tittel}</h3>
          <p className="my-16 text-p">{beskrivelse}</p>
          <MainButton btnText={buttonText} path={href} />
        </div>
      </div>
    </div>
  );
};

export const PictureCardReversed = ({
  src,
  alt,
  tittel,
  beskrivelse,
  buttonText,
  href,
}) => {
  return (
    <div className="flex flex-row-reverse justify-between">
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          loader={myLoader}
        />
      </div>
      <div className="">
        <div className="">
          <h3 className="text-h2">{tittel}</h3>
          <p className="my-16 text-p">{beskrivelse}</p>
          <MainButton btnText={buttonText} path={href} />
        </div>
      </div>
    </div>
  );
};

export const CTAbanner = ({ src, alt, tittel, brodteks, btnText }) => {
  return (
    <div className="flex h-510 z-1 relative bgImage justify-center">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        loader={myLoader}
      />
      <div className="flex justify-center items-center flex-col relative z-1">
        <div className="text-center">
          <h2 className="text-h1 text-hvit">{tittel}</h2>
        </div>
        <div className="flex justify-center my-8 text-center">
          <p className="w- text-hvit">{brodteks}</p>
        </div>
        <div className="my-20">
          <MainButton btnText={btnText} />
        </div>
      </div>
    </div>
  );
};
