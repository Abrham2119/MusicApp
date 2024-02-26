import React from 'react';
import styled from 'styled-components';
import { CustomButtonProps } from '../types/propsType';
import { Button, CircleButton } from '../styles/ButtonStyle';

const CustomButton: React.FC<CustomButtonProps> = ({
  padding,
  width,
  border,
  backgroundColor,
  hoverBackgroundColor,
  hoverTextColor,
  customStyles,
  children,
  gap,
  index,
  text,
  shape,
  borderRadius,
  onClick,
  ...rest
}) => {
  const StyledButton = shape === 'circle' ? CircleButton : Button;

  return (
    <StyledButton
    borderRadius={borderRadius}
      padding={padding}
      width={width}
      border={border}     
      gap={gap}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverTextColor={hoverTextColor}
      customStyles={customStyles}
      onClick={onClick}
      {...rest}
    >
      {children ? children : text}
    </StyledButton>
  );
};

export default CustomButton;
