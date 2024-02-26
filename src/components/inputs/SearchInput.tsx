import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputProps } from '../../types/propsType';
import { CustomSearchInput } from '../../styles/InputStyle';
import { SearchOutlined } from '@mui/icons-material';


const SearchContainer = styled.div`
  position: relative;
  
`;



// Reusable SearchInput component
export const SearchInput:React.FC<SearchInputProps> = ({ placeholder,border,borderRadius,customStyles, ...rest }) => {
  return (
    <SearchContainer>
      <CustomSearchInput border={border} borderRadius={borderRadius} customStyles={customStyles} type="text" placeholder={placeholder} {...rest} />
      <SearchIcon/>
    </SearchContainer>
  );
};
