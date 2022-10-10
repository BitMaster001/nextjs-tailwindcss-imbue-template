import tw from "tailwind-styled-components";

const StyledButton = tw.button`
  ${(p) => (p.$variant === "primary" ? "bg-purple text-white hover:bg-yellow hover:text-black"
    : p.$variant === "secondary" ? "bg-white text-purple hover:bg-yellow hover:text-black"
      : "bg-white text-black")}

  ${(p) => (p.$isRounded && "rounded-full")}

  px-6
  py-2
  transition-colors
`;

const Button = (props) => {
  const { label, isRounded, onClick, variant } = props;

  return (
    <StyledButton $variant={variant} onClick={onClick} $isRounded={isRounded}>{label}</StyledButton>
  );
};

export default Button;