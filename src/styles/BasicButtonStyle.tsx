import React, { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from '../types/propsType';





export const buttonStyles = css<ButtonProps>`
  font-size: ${({ fontSize }) => fontSize || '18px'}; // Changed default fontSize
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'}; // Changed default fontWeight
  border: 2px solid transparent; // Changed border style
  color: ${({ color }) => color || '#000'}; // Changed default color
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#ff4500'}; // Changed hover color
    border-color: #fff; // Added hover border color change
  }
`;

export const RectangleButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 14px 28px; // Changed padding
  border-radius: 0px; // Changed borderRadius to square edges
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffeb3b'}; // Changed default background
`;

export const LargeButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 20px 40px; // Changed padding
  border-radius: 10px; // Changed borderRadius
  background-color: ${({ backgroundColor }) => backgroundColor || '#4caf50'}; // Changed default background
`;

export const SmallButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 10px 20px; // Changed padding
  border-radius: 4px; // Changed borderRadius
  background-color: ${({ backgroundColor }) => backgroundColor || '#f44336'}; // Changed default background
`;

export const CircleButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 15px; // Changed padding
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor || '#2196f3'}; // Changed default background
`;
