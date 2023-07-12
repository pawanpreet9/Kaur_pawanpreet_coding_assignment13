import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

export const StyledImg = styled.img<{ disabled?: boolean; backgroundColor?:string; }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor)};

`;
const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled,
  backgroundColor,
  ...props
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...props}
  />
);

export default Img;
