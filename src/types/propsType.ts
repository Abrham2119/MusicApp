import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

// Button-related interfaces
export interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomButtonProps {
  padding?: string;
  width?: string;
  text?: string;
  border?: string;
  gap?: string;
  index?: number;
  shape?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  customStyles?: any;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

// Input-related interface
export interface SearchInputProps {
  placeholder?: string;
  border?: string;
  borderRadius?: string;
  customStyles?: any;
}

// Typography-related interface
export interface HeaderProps {
  size?: string;
  color?: string;
  margin?: string;
  padding?: string;
  animation?: boolean;
  weight?: string;
  width?: string;
  children?: ReactNode;
}

// Image-related interface
export interface ImageProp {
  src?: string | ReactNode;
  alt?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  objectFit?: string;
}
