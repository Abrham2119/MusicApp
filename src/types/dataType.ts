import { DefaultTheme } from 'styled-components';
import { ReactNode } from "react";


export interface Song {
    _id?: string;
    createdBy: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    isFavorite?: boolean;
    __v?: number;
  }

  export interface SideBarButtonContent {
    icon: (color:string)=> ReactNode;
    title: string;
    type:string;
  }



export interface CustomTheme extends DefaultTheme {
  colors: {
    primaryBackground: string;
    secondaryBackground: string;
    white: string;
    lightGray: string;
    lightWhite: string;
    primary: string;
    secondary: string;
    lighter: string;
  };
  fonts: {
    body: string;
    heading: string;
    mono: string;
    serif: string;
    fancy: string;
    fancy2: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    extraSmall: string;
    extraLarge: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    circle: string;
  };
  sizes: {
    navbarHeight: string;
    controllerHeight: string;
  };
}


export interface SongStatistics {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreCounts: { _id: string; count: number }[];
    artistAlbumCounts: { _id: { artist: string; album: string }; count: number }[];
    albumSongCounts: { _id: string; count: number }[];
    genreSongCounts: { _id: string; count: number }[];
    artistSongCounts: { _id: string; count: number }[];
    favoriteSongsCount: number;
    totalUniqueArtistsWithMultipleAlbums: number;
    totalUniqueGenresWithMultipleSongs: number;
  }
  
  
  // Initial state
  export interface SongsState {
    userData:Object;
    songs: Song[];
    currentSong:Song[];
    currentBody:string;
    currentPlaying:Song | null;
    addSong:boolean;
    openSidebar:boolean;
    songFiltered:boolean;
    updateSong:boolean;
    songStatistics?:SongStatistics;
    dataTobeUpdated:Partial<Song> ;
    searchCars:string;
    isLoading:boolean;
  }

  export interface UserData {
    username:string;
  }