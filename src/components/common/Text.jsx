import tw from "tailwind-styled-components";

const StyledText = tw.p`
  ${(p) => p.$size === "lg" ? "text-lg"
    : p.$size === "sm" ? "text-sm" : "text-base"}
`;

const Text = ({ children, size }) => {
  return (
    <StyledText $size={size}>{children}</StyledText>
  );
};

export default Text;