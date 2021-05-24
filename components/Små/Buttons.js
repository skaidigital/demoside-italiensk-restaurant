export const MainButton = ({ path, btnText, className, href }) => {
  return (
    <div className="flex">
      <a
        href={href}
        className={`w-0100 font-semibold md:w-auto bg-cta rounded-rund py-8 px-32 text-center cursor-pointer hover:deco-none text-hvit text-p hover:no-underline ${className}`}
      >
        {btnText}
      </a>
    </div>
  );
};

export const SecondaryButton = ({ href, btnText, c }) => {
  return (
    <div className="flex">
      <a
        href={href}
        className={`bg-hvite border-2 font-semibold cursor-pointer hover:deco-none border-black rounded-rund py-8 px-32 flex text-center text-black text-p hover:no-underline ${c}`}
      >
        {btnText}
      </a>
    </div>
  );
};
