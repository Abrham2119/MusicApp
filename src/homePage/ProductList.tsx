import { MusicCardComponent } from "../components/cards/MusicCard"
import { theme } from "../theme/Theme";
import { Song } from "../types/dataType";


export const MusicContainer:React.FC<{songs:Song[]}> = ({songs})=>{
    return (
        <div style={styles}>
        {
          songs.map((song:Song)=>{
            return (
              <MusicCardComponent song={song}/>
            )
          })
        }
       
       
      </div>
    )
}
const styles: Object = {
    overflowY: "scroll",
    width: "100%",
    height: `calc(100vh - ${theme.sizes.navbarHeight} - ${theme.sizes.controllerHeight}`,
    display: "flex",
    flexWrap: "wrap",
  };