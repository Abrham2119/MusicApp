import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { RootState } from '../../store/store';


const LoaderContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 60%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const LoadingComponent = () => {
    const {isLoading} = useSelector((store:RootState)=>store.songs)
   
  return (
    <LoaderContainer style={{display:`${isLoading ? 'flex': 'none'}`}}>
      
    </LoaderContainer>
  );
};

export default LoadingComponent;
