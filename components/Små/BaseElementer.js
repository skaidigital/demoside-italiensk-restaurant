import { Element } from "react-scroll";

export const SectionContainer = ({ children, id, farge, pt }) => {
  let padding = pt;
  let paddingMD = padding * 2;
  let paddingLG = paddingMD * 2;
  let paddingXL = paddingLG;

  let ut =
    pt != undefined
      ? `py-${padding} md:py-${paddingMD} lg:py-${paddingLG} xl:py-${paddingXL}`
      : `py-80 md:py-160 lg:py-160 xl:py-160`;

  const klassenavn = `bg-${farge} mx-auto align-center py-80 md:py-120 lg:py-120 `;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const SectionContainerUtenPadding = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center`;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto w-screen md:max-w lg:max-w xl:max-w">
      <div className="max-w-95 mx-auto align-center">{children}</div>
    </div>
  );
};
export const LayoutOmOss = ({ children }) => {
  return (
    <div className="container mx-auto w-screen md:max-w lg:max-w xl:max-w">
      <div className="lg:max-w-60 mx-auto align-center">{children}</div>
    </div>
  );
};

export const HeroContainer = ({ children, id, farge, pt, c }) => {
  const klassenavn = `z-1 bg-${farge} mx-auto align-center pb-80 ${c} pt-40 md:pb-120 md:pt-56 lg:pb-240 lg:pt-80 `;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const HeroContainerUtenPadding = ({
  children,
  id,
  farge,
  pt,
  klasseNavn,
}) => {
  const klassenavn = `bg-${farge} mx-auto align-center pt-40 md:pt-56 lg:pt-80 z-1`;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const NavContainer = ({ children, id }) => {
  const klassenavn = `z-2`;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};
export const FooterContainer = ({ children, id }) => {
  const klassenavn = `z-2`;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const Grid = ({ children, c }) => {
  const klasseNavn = `grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-24 ${c}`;
  return <div className={klasseNavn}>{children}</div>;
};

export const GridItem = ({ c, children, id }) => {
  return (
    <div key={id} className={c}>
      {children}
    </div>
  );
};
