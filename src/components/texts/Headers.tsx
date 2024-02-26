import styled from "styled-components";
import React from "react";
import { HeaderProps } from "../../types/propsType";

import { Header } from "../../styles/HeaderStyle";

export const CustomHeader:React.FC<HeaderProps> = ({width, animation, size, color, margin,weight, padding, children }) => {
    return <Header animation={animation} width={width} size={size} color={color} margin={margin} weight={weight} padding={padding}>{children}</Header>;
  };