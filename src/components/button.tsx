import { Button as MUIButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = (
  { variant = "contained", disabled, onClick, children },
  props
) => (
  <MUIButton
    variant={variant}
    onClick={disabled ? () => {} : onClick}
    style={{
      opacity: disabled ? "50%" : "100%",
      cursor: disabled ? "not-allowed" : "pointer",
    }}
    {...props}
  >
    {children}
  </MUIButton>
);

export default Button;
