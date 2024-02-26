import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { SideBarButtonContent } from "../../types/dataType"; 

export const sidebarButtonContent: SideBarButtonContent[] = [
    {
        icon: (color) => <CottageOutlinedIcon sx={{ color: `${color}` }} fontSize="small" />,
        title: "Home",
        type: "regular"
      },
      {
        icon: (color) => <PersonIcon sx={{ color: `${color}` }} fontSize="small" />,
        title: "Artist",
        type: "regular"
      },
      
      {
        icon: (color) => <GridViewIcon sx={{ color: `${color}` }} fontSize="small" />,
        title: "Genre",
        type: "regular"
      },
      {
        icon: (color) => <LibraryMusicOutlinedIcon sx={{ color: `${color}` }} fontSize="small" />,
        title: "Album",
        type: "regular"
      },
      
      
      {
        icon: (color) => <MusicNoteOutlinedIcon sx={{ color: `${color}`}}  fontSize="small" />,
        title: "Recent Played",
        type: "special"
      },
    ];