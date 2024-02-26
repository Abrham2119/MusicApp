import styled from "styled-components";
import { CustomImage } from "../images/CustomImage";
import { CustomHeader } from "../texts/Headers";
import { theme } from "../../theme/Theme";
import { Statistics } from "../../styles/StatisticsStyle";


interface ArtistData {
    artist:any
}
export const ArtistsComponent:React.FC<any> = ({artist, onClick})=>{

  
    return (
        <Statistics onClick={onClick}>
        <div >
            <CustomHeader color="white" size="large">
            {artist._id}
            </CustomHeader>
            <div style={{display:"flex", alignItems:"center",gap:10}}>
            <CustomHeader size="small" color={theme.colors.primary}>
                Songs
            </CustomHeader>
            <CustomHeader size="small" color={theme.colors.primary}>
               {artist.count}
            </CustomHeader>
            </div>
        </div>
        </Statistics>
    )
}