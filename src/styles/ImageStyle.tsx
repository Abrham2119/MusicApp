import styled from 'styled-components';
import { ImageProp } from '../types/propsType';


export const Image = styled.img<ImageProp>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
`;