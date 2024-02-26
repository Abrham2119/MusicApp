
import styled from "styled-components";
import Mylogo from "../../assets/Mylogo (5).svg"
import AddIcon from '@mui/icons-material/Add';
import { theme } from "../../theme/Theme";
import {NavSearchInput } from "../../styles/InputStyle";
import CustomButton from "../CustomButton";
import { CustomImage } from "../images/CustomImage";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomHeader } from "../texts/Headers";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useDispatch } from "react-redux";
import { filterSongsBySearch, openAddSong, toggleSidebar } from "../../store/features/songSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../types/dataType";


export const Navbar = styled.div`
  height: ${({ theme }) => theme.sizes.navbarHeight};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondaryBack};
`;
 const OpenButton = styled.div`
 display:none;
 @media (max-width: 576px) {
 display:flex;
 cursor:pointer;
}
 `
export const CustomNavbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [openLogout, setOpenLogout] = useState(false)
  const userDataString = localStorage.getItem('userData');
  const userData: UserData = userDataString ? JSON.parse(userDataString) : null
  useEffect(()=>{
  dispatch(filterSongsBySearch(search))
  },[search])
  useEffect(()=>{
  console.log(openLogout);
  },[openLogout])
 const Logout = ()=>{
  localStorage.removeItem('userData');
  
 }
  return (
    <Navbar>
      
      
      <OpenButton onClick={()=>dispatch(toggleSidebar(true))}>
        <MenuOpenIcon sx={{color:theme.colors.lightGray,fontSize:"27px"}}/>
      </OpenButton>
      <OpenButton>
         <CustomImage
        src={Mylogo}
        alt="light logog"
        width="100px"
       
      />
      </OpenButton>
      <div style={{display:"flex", flex:1,justifyContent:"space-around" ,border:"black 2px"}}>


        <NavSearchInput
          placeholder="Search Music"
          border="none"
          borderRadius="40px"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />

        <div style={{ display: "flex", alignItems: "center", padding: "0 10px", gap: "10px", }}>
          <CustomHeader color="gray">Add Music</CustomHeader>
          <CustomButton onClick={() => {
            dispatch(toggleSidebar(false))
            dispatch(openAddSong(true))
          }} backgroundColor={theme.colors.primary} padding="10px" borderRadius="100%" >
            <AddIcon sx={{}} />
          </CustomButton>
        </div>
      </div>
      
    </Navbar>
  );
};
