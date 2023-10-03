interface ButtonProps {
  children: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
