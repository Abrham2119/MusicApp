import styled from "styled-components";
import { CustomHeader } from "../texts/Headers";
import { theme } from "../../theme/Theme";
import { Statistics } from "../../styles/StatisticsStyle";

export const GenreComponent:React.FC<any> = ({onClick, genre})=>{

    return (
        <Statistics onClick={onClick}>
        {/* <CustomImage  src={GenreImage} width="50px"/> */}
        <div >
            <CustomHeader color="white" size="large">
           {genre._id}
            </CustomHeader>
            <div style={{display:"flex", alignItems:"center",gap:10}}>
            <CustomHeader size="small" color="white">
                Songs
            </CustomHeader>
            <CustomHeader size="small" color="white">
               {genre.count}
            </CustomHeader>
            </div>
        </div>
        </Statistics>
    )
}