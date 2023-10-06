import { Button as MUIButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = (
  { id, variant = "contained", color = "primary", disabled, onClick, children },
  props
) => (
  <MUIButton
    id={id}
    data-testid={id}
    variant={variant}
    color={color}
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
