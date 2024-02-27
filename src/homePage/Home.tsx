import { Home } from "../styles/HomeStyle";
import { Body } from "../styles/BodyStyle";
import { HomeDev } from "../styles/HomeDevStyle";
import { HeaderContainer } from "../styles/HeaderContainer";

import { LeftSideBar } from "../components/Sidebars/LeftSideBar";
import { theme } from "../theme/Theme";
import { CustomNavbar } from "../components/Sidebars/NavBar";
import { CustomMusicController } from "./MusicController";
import AddCard from "../components/cards/AddMusic";
import { useSelector } from "react-redux";
import { ArtistsList } from "./ArtistHomePage";
import { GenreList } from "./GenreHomePage";
import { AlbumList } from "./AlbumHomePage";
import UpdateCard from "../components/cards/UpdateMusic";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { Song, UserData } from "../types/dataType";
import { MusicContainer } from "./ProductList";
import { GET_ALL_SONGS, GET_STATISTICS } from "../types/redux.type";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";


export const CustomHome = () => {

  const userDataString = localStorage.getItem('userData');
  const userData: UserData = userDataString ? JSON.parse(userDataString) : null

  const { currentBody, addSong, updateSong, currentSong, songFiltered } = useSelector((store: RootState) => store.songs);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: GET_STATISTICS, username: userData ? userData.username : '' })

    dispatch({ type: GET_ALL_SONGS, username: userData ? userData.username : '' })
    
    
  }, [])


  return (
    <Home>
      <LeftSideBar />
      <HomeDev>
        <CustomNavbar />
        
        {
          currentSong.length !== 0 ?
            <Body>

              {currentBody.toLowerCase() === "album" && (songFiltered ? <MusicContainer songs={currentSong} /> : <AlbumList />)}
              {currentBody.toLowerCase() === "artist" && (songFiltered ? <MusicContainer songs={currentSong} /> : <ArtistsList />)}
              {currentBody.toLowerCase() === "genre" && (songFiltered ? <MusicContainer songs={currentSong} /> : <GenreList />)}
              {currentBody.split(" ")[0].toLowerCase() === "recent" && (<div>Recent</div>)}
              {currentBody.toLowerCase() === "home" && <MusicContainer songs={currentSong} />}

            </Body> : <Header />

        }

      
      </HomeDev>
      


      {addSong && <AddCard />}
        {updateSong && <UpdateCard />}
        <CustomMusicController />

    </Home>
  );
};


const Header = () => {
  return (
    <HeaderContainer>
      <h5 style={{ fontSize: '400%', color: theme.colors.lightWhite }}></h5>
    </HeaderContainer>
  );
};