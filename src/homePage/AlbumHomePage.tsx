import { ArtistsComponent } from "../components/cards/ArtistCard";
import styled from "styled-components";
import { AlbumComponent } from "../components/cards/AlbumCard";
import { useSelector,useDispatch } from "react-redux";
import { filterCurrentSongs, toggleFilteredSong } from "../store/features/songSlice";
import { Song } from "../types/dataType";
import { RootState } from "../store/store";
import { ListContainer } from "../styles/CardStyle";

export const AlbumList:any = ()=>{
    const {songStatistics} = useSelector((store: RootState) => store.songs);
    const dispatch = useDispatch()
    return (
        < ListContainer>{
             songStatistics?.artistAlbumCounts.map((item:any)=>{              
            return(
                <AlbumComponent onClick={()=>{
                     dispatch(filterCurrentSongs({album:item._id.album}))
                     dispatch(toggleFilteredSong(true))}} album={item}/>
            )
        })}
        </ListContainer>
    )
}