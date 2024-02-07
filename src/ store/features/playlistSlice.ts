// playlistSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Playlist {
  id: number;
  name: string;
  songs: number[]; // Assuming each song has a unique ID
}

interface PlaylistState {
  playlists: Playlist[];
}

const initialState: PlaylistState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlists.push(action.payload);
    },
    removePlaylist: (state, action: PayloadAction<number>) => {
      state.playlists = state.playlists.filter(playlist => playlist.id !== action.payload);
    },
  },
});

export const { addPlaylist, removePlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
