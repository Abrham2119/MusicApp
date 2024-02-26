import styled from '@emotion/styled';
import {theme} from '../theme/Theme';

export const Body = styled.div`
  display: flex;
  height: calc(
    100vh - ${theme.sizes.navbarHeight} - ${theme.sizes.controllerHeight}
  );
  padding:15px;  
  overflow-y:scroll;
`