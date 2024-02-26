
import { CloseButton } from "../../styles/CloseButton";
import { SideBar } from "../../styles/SideBarStyle";
import CustomButton from "../CustomButton";
import { CustomImage } from "../images/CustomImage";
import Mylogo from "../../assets/Mylogo (5).svg"
import { theme } from "../../theme/Theme";
import { CustomHeader } from "../texts/Headers";
import { ReactNode, useState } from "react";
import { sidebarButtonContent } from "./SideBarElement";
import { useDispatch, useSelector } from "react-redux";
import { filterCurrentSongs, setCurrentBody, toggleFilteredSong, toggleSidebar } from "../../store/features/songSlice";
import { openAddSong } from "../../store/features/songSlice";
import { RootState } from "../../store/store";
const color = theme.colors;



export const LeftSideBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {openSidebar} = useSelector((store:RootState)=> store.songs)
    const setIndex = (index:number)=>{
        setCurrentIndex(index)
    }
    const dispatch = useDispatch()


    
  return (
    <SideBar openSidebar={openSidebar}>
      <CustomImage
        src={Mylogo}
        alt="Mylogo"
        padding="25px 0 90px 13px"
        width="80%"
        borderRadius="15px"
        
      />
      
     <div style={{ display: 'flex',flexDirection: 'column', gap: '40px',height:'fit-content' }}>
        <div>

          {sidebarButtonContent.map((button, index) => {



            if (button.type === 'regular') {
              const active = currentIndex === index;
              return (


                <CustomButton
                  key={index}
                  padding="20px 30px"
                  width="100%"                 
                  backgroundColor="none"
                  gap="20px"
                  customStyles={active ? `border-left:4px solid` : ''}
                  onClick={() => {
                   
                      dispatch(toggleSidebar(false))
                    
                    setIndex(index)
                    dispatch(setCurrentBody(button.title))
                    dispatch(toggleFilteredSong(false))
                  }}
                >
                  {button.icon(active ? color.primary : color.white)}
                  <CustomHeader size="medium" color={active ? color.primary : color.white} weight="400">
                    {button.title}
                  </CustomHeader>
                </CustomButton>
              );
            }
            return null;
          })}
        </div>
        <div style={{position: "relative"}}>
          <br />        
          <br />
          {sidebarButtonContent.map((button, index) => {
            if (button.type === 'special') {
              const active = currentIndex === index;
              return (
                <CustomButton
                  key={index}
                  width="100%"
                  padding="8px 23px"
                  backgroundColor="none"
                  hoverBackgroundColor={theme.colors.lightGray}
                  gap="20px"
                  onClick={() => {
                    setIndex(index)
                    dispatch(toggleSidebar(false))
                    dispatch(setCurrentBody(button.title))
                    dispatch(toggleFilteredSong(false))
                    dispatch(filterCurrentSongs({isFavorite:true}))
                  }}                >
                  {button.icon(active ? color.primary : color.white)}
                  <CustomHeader size="medium" color={active ? color.primary : color.white} weight="400">
                    {button.title}
                  </CustomHeader>
                </CustomButton>
              );
            }
            return null;
          })}
        </div>
      </div>
    </SideBar>
  );
};
