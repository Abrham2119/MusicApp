import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, SongStatistics, SongsState } from '../../types/dataType';


const initialState: SongsState = {
  userData: { userName: "Abrham" },
  songs: [],
  currentSong: [],
  songStatistics: undefined,
  dataTobeUpdated: {},
  searchCars: "",
  isLoading: false,
  currentBody: 'home',
  songFiltered: false,
  updateSong: false,
  openSidebar: false,
  addSong: false,
  currentPlaying: null,
  
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    LoadingState(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    
    openUpdateSong(state, action: PayloadAction<boolean>) {
      state.updateSong = action.payload;
    },
    filterCurrentSongs(state, action: PayloadAction<Partial<Song>>) {
      state.currentSong = state.songs.filter(song =>
        Object.keys(action.payload).every(key =>
          key === "isFavorite" ?
            action.payload[key as keyof Song] ? song[key] : true :
            song[key as keyof Song] === action.payload[key as keyof Song]
        )
      );
    },
    updateSong(state, action: PayloadAction<Partial<Song>>) {
      state.currentSong = state.currentSong.map(song =>
        song._id === action.payload._id ? { ...song, ...action.payload } : song
      );
    },
    loadAllSongs(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.currentSong = action.payload;
    },
    loadStatistics(state, action: PayloadAction<SongStatistics>) {
      state.songStatistics = action.payload;
    },
    setCurrentBody(state, action: PayloadAction<string>) {
      state.currentBody = action.payload;
    },
    openAddSong(state, action: PayloadAction<boolean>) {
      state.addSong = action.payload;
    },
    addSong(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.currentSong.push(action.payload);
    },
    deleteSong(state, action: PayloadAction<string>) {
      state.currentSong = state.currentSong.filter(song => song._id !== action.payload);
    },
    loadUpdateData(state, action: PayloadAction<Song>) {
      state.dataTobeUpdated = action.payload;
    },
    toggleFilteredSong(state, action: PayloadAction<boolean>) {
      state.songFiltered = action.payload;
    },
    setCurrentSong(state, action: PayloadAction<Song>) {
      state.currentPlaying = action.payload;
    },
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.openSidebar = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      state.currentSong = state.currentSong.map(song =>
        song._id === action.payload ? { ...song, isFavorite: !song.isFavorite } : song
      );
    },
    filterSongsBySearch(state, action: PayloadAction<string>) {
      state.currentSong = state.songs.filter(song =>
        song.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        song.artist.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    
  },
});

export const {
  filterCurrentSongs, filterSongsBySearch, loadAllSongs, setCurrentBody,  openAddSong, openUpdateSong, loadStatistics, updateSong, addSong, deleteSong, toggleFilteredSong,loadUpdateData, setCurrentSong, toggleSidebar,toggleFavorite, LoadingState,} = songsSlice.actions;

export default songsSlice.reducer;
