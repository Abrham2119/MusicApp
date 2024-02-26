import { ImageProp } from "../../types/propsType";
import { Image } from "../../styles/ImageStyle";
import styled from "styled-components";

const ImageContainer = styled.div<ImageProp>`
padding:${({padding})=>padding || '5px'}
`
export const CustomImage:React.FC<ImageProp> = ({ src, alt, width, height,padding, borderRadius, objectFit, ...rest }) => {
    
    return (
      <ImageContainer padding={padding}>
    <Image src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} objectFit={objectFit} {...rest} />
    </ImageContainer>
    )
  };