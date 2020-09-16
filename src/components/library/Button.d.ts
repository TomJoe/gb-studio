import * as React from "react";

export interface ButtonProps {
  onClick?: () => void;
}

declare const Button: React.SFC<ButtonProps>;

export default Button;
