export interface Song {
    id: number;
    title: string;
    album: string;
    genre: string;
    artist: string;
  }
  

export interface SongListProps {
  songs: Song[];
}