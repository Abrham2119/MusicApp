import { ArtistsComponent } from "../components/cards/ArtistCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterCurrentSongs, toggleFilteredSong } from "../store/features/songSlice";
import { RootState } from "../store/store";
import { ListContainer } from "../styles/CardStyle";

export const ArtistsList:any = ()=>{
    const {songStatistics} = useSelector((store: RootState) => store.songs);
    const dispatch = useDispatch()
    // console.log(songStatistics.artistSongCounts)
    
    return (
        < ListContainer>{
            songStatistics && songStatistics.artistSongCounts.map((item:any)=>{
                console.log(item);                
            return(
                <ArtistsComponent onClick={()=>{
                    dispatch(filterCurrentSongs({artist:item._id}))
                    dispatch(toggleFilteredSong(true))}} artist={item}/>
            )
        })}
        </ListContainer>
    )
}