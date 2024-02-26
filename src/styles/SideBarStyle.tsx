import styled from "styled-components";

export const SideBar = styled.div<{ openSidebar: boolean }>`
height: 100vh;
    width: 185px;
    border-radius:20px;
      
   
   
   
    background: linear-gradient(to bottom right, #000000, #FF0000);
        @media (max-width: 550px) {
            position: absolute;
            padding: 15px;
             width: 100vw;
   
        
        background: linear-gradient(to bottom right, #000000, #FF0000);
        z-index: 10;
        transition: transform 400ms ease-in-out; /* Added transition property */
    }
`;
