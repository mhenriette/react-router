import { Heading4 } from "./Typography";

const Button = ({ children, className }) => {
  return (
    <div className={`text-center rounded-md px-[22px] py-2 ${className}`}>
      <Heading4> {children}</Heading4>
    </div>
  );
};

export default Button;
