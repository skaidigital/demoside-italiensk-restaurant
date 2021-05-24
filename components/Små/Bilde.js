import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};

export const Bilde = ({ src, alt, w, h }) => {
  return <Image src={src} alt={alt} width={w} height={h} loader={myLoader} />;
};
