import Image from "next/image";
import { Grid, GridItem } from "../Små/BaseElementer";
import { MainButton } from "../Små/Buttons";

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};

export const PictureCardReversed = ({
  src,
  alt,
  tittel,
  beskrivelse,
  buttonText,
  href,
  height,
  width,
  layout,
}) => {
  return (
    <Grid>
      <GridItem c="col-span-4 md:col-start-5 lg:col-start-7 lg:col-span-6 items-self-stretch grid h-400 min-h-0">
        <Image
          className=""
          objectFit="cover"
          src={src}
          alt={alt}
          layout={layout}
          height={height}
          width={width}
          loader={myLoader}
        />
      </GridItem>
      <GridItem c="col-span-4 row-start-1 lg:col-span-5">
        <h2 className="text-h2">{tittel}</h2>
        <p className="my-16 text-p">{beskrivelse}</p>
        <MainButton btnText={buttonText} path={href} />
      </GridItem>
    </Grid>
  );
};

export const PictureCard = ({
  src,
  alt,
  tittel,
  height,
  width,
  beskrivelse,
  buttonText,
  href,
}) => {
  return (
    <Grid>
      <GridItem c="col-span-4 lg:col-span-5 md:col-start-5 lg:col-start-8">
        <h2 className="text-h2">{tittel}</h2>
        <p className="my-16 text-p">{beskrivelse}</p>
        <MainButton btnText={buttonText} path={href} />
      </GridItem>
      <GridItem c="row-start-1 row-start-1 col-span-4 lg:col-span-6 grid items-self-stretch h-400 min-h-0">
        <Image
          className=""
          objectFit="cover"
          src={src}
          alt={alt}
          height={height}
          width={width}
          loader={myLoader}
        />
      </GridItem>
    </Grid>
  );
};
