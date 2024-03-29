import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "../inputs/InputLable";
import { theme } from "../../theme/Theme";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { openUpdateSong, updateSong } from "../../store/features/songSlice";
import axios from "axios";
import { Song } from "../../types/dataType";
import { UPDATE_SONG_BY_ID } from "../../types/redux.type";
import { RootState } from "../../store/store";
// Define types for props
interface AddCardProps {
  onAddSong?: (song: Song) => void;
  onCancel?: () => void;
}



// Styled components for the card
const CardContainer = styled.div`
  height: calc(
    100vh - ${theme.sizes.navbarHeight} - ${theme.sizes.controllerHeight}
  );
  position: absolute;
  z-index: 20;
  right: 0;
  bottom: ${theme.sizes.navbarHeight};
  background-color: ${theme.colors.secondaryBackground};
  width: 300px;
border: 2px solid ${theme.colors.lightWhite};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
 
  &:hover {
    transform: translateY(-4px);
  }
`;

const CardForm = styled.form`
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;



const Header = styled.h2`
  background-color: ${theme.colors.primaryBackground};
  color: #fff;
  padding: 15px;
  margin: 0;
  border-radius: 8px 8px 0 0;
`;

// Functional component for the Add Card
const UpdateCard: React.FC<AddCardProps> = ({ onAddSong, onCancel }) => {
  const {dataTobeUpdated} = useSelector((store: RootState) => store.songs);
  
  
  const [title, setTitle] = useState(dataTobeUpdated.title);
  const [artist, setArtist] = useState(dataTobeUpdated.artist);
  const [album, setAlbum] = useState(dataTobeUpdated.album);
  const [genre, setGenre] = useState(dataTobeUpdated.genre);
  const dispatch = useDispatch()

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const newSong: any = { title, artist, album, genre, _id:dataTobeUpdated._id };
    dispatch({type:UPDATE_SONG_BY_ID,  song:newSong})
   
  };


  return (
    <CardContainer>
      <Header >Update song</Header>
      <CardForm onSubmit={handleSubmit}>
        <InputLabel
          label="Title"
          type="text"
          placeholder="song... A"
          value={title}
          onChange={(e:any) => setTitle(e.target.value)}
        />
        <InputLabel
          label="Artist"
          type="text"
          placeholder="artist..."
          value={artist}
          onChange={(e:any) => setArtist(e.target.value)}
        />
        <InputLabel
          label="Album"
          type="text"
          placeholder="album..."
          value={album}
          onChange={(e:any) => setAlbum(e.target.value)}
        />
        <InputLabel
          label="Genre"
          type="text"
          placeholder="genre..."
          value={genre}
          onChange={(e:any) => setGenre(e.target.value)}
        />
        <ButtonContainer>

          <CustomButton onClick={()=>dispatch(openUpdateSong(false))} backgroundColor={theme.colors.lightWhite+''}>
            Cancel
          </CustomButton>
          <CustomButton  backgroundColor={theme.colors.lightWhite}>
            Update
          </CustomButton>
        </ButtonContainer>
      </CardForm>
    </CardContainer>
  );
};

export default UpdateCard;
