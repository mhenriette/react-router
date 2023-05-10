import { Heading4 } from "../ui/Typography";

const Footer = ({ className }) => {
  const date = new Date();
  return (
    <div className={`bg-[#252525] w-full ${className}`}>
      <div className="py-6 mx-auto">
        <Heading4 className="text-[#AAAAAA] md:text-xl text-center">
          Ⓒ {date.getFullYear()} #VANLIFE
        </Heading4>
      </div>
    </div>
  );
  a;
};

export default Footer;
