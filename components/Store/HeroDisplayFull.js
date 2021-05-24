import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};

export const HeroDisplayFull = ({ src, alt, tittel, brodteks }) => {
  return (
    <div className="flex relative  h-380 lg:h-608 -mt-80">
      <div className="z-1 bgImage">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          loader={myLoader}
        />
      </div>
      <div className="absolute inset-0 flex md:text-center px-16 justify-center items-center flex-col z-2">
        <div className="">
          <h1 className="text-hvit">{tittel}</h1>
          <p className="text-hvit">{brodteks}</p>
        </div>
      </div>
    </div>
  );
};
