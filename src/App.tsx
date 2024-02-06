import { FC } from 'react';
import SongList from './components/SongList/SongList';
import { Song } from './types/song.trype';



// Example usage
const songsData: Song[] = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', album: 'Album 1', genre: 'Genre 1' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
  { id: 3, title: 'Song 3', artist: 'Artist 3', album: 'Album 3', genre: 'Genre 3' },
  { id: 3, title: 'Song 3', artist: 'Artist 3', album: 'Album 3', genre: 'Genre 3' },
];

const App: FC = () => (
  <div>
    <h1>My Music App</h1>
    <SongList songs={songsData} />
  </div>
);

export default App;
