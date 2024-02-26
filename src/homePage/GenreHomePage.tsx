import { ArtistsComponent } from "../components/cards/ArtistCard";
import styled from "styled-components";
import { GenreComponent } from "../components/cards/GenreCar";
import { useSelector, useDispatch } from "react-redux";
import { filterCurrentSongs, toggleFilteredSong } from "../store/features/songSlice";
import { RootState } from "../store/store";
import { ListContainer } from "../styles/CardStyle";

export const GenreList:any = ()=>{
    const {songStatistics} = useSelector((store: RootState) => store.songs);
    const dispatch = useDispatch()
    return (
        < ListContainer>{
            songStatistics && songStatistics.genreSongCounts.map((item:any)=>{
            return(
                <GenreComponent  onClick={()=>{
                    dispatch(filterCurrentSongs({genre:item._id}))
                    dispatch(toggleFilteredSong(true))}}  genre={item}/>
            )
        })}
        </ListContainer>
    )
}