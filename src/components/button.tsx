import { Button as MUIButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
}) => (
  <MUIButton variant={variant} onClick={onClick}>
    {children}
  </MUIButton>
);

export default Button;
