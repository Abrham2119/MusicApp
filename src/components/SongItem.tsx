import { FC } from 'react';
import { Song } from '../types/song.type';
4
// Individual SongItem component
const SongItem: FC<Song> = ({ title, artist, album, genre }) => (
    <div>
      <strong>{title}</strong> by {artist} from the album {album} ({genre} genre)
    </div>
  );
  
  export default SongItem;