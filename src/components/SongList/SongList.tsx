import { FC } from 'react';
import SongItem from "./SongItem";
import { SongListProps } from '../../types/song.trype';

// SongList component
const SongList: FC<SongListProps> = ({ songs }) => (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <SongItem key={song.id} {...song} />
      ))}
    </div>
  );

  export default SongList;