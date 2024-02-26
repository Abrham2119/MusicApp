import React, { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';
import { LargeButton, SmallButton, CircleButton, RectangleButton, buttonStyles } from '../styles/BasicButtonStyle';
import { ButtonProps } from '../types/propsType';

interface MainButtonProps extends ButtonProps {
  size?: 'large' | 'small';
  shape?: 'circle' | 'rectangle';
}

const MainButton: React.FC<MainButtonProps> = ({
  size = 'small',
  shape = 'circle',
  backgroundColor,
  color,
  hoverBackgroundColor,
  fontSize,
  fontWeight,
  children,
  onClick
}) => {
  let ButtonComponent: React.FC<ButtonProps>;

  switch (size) {
    case 'large':
      ButtonComponent = LargeButton;
      break;
    case 'small':
      ButtonComponent = SmallButton;
      break;
    default:
      ButtonComponent = SmallButton;
  }

  return (
    <ButtonComponent
      backgroundColor={backgroundColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default MainButton;
