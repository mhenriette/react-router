import { Heading4 } from "../ui/Typography";

const Footer = ({ className }) => {
    return <div className={`bg-[#252525] w-full ${className}`}>
        <div className="py-6 mx-auto">
            <Heading4 className="text-[#AAAAAA] md:text-xl text-center">Ⓒ 2022 #VANLIFE</Heading4>

        </div>
    </div>;
};

export default Footer;
