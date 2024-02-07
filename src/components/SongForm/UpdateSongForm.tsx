// src/components/SongForm/UpdateSongForm.tsx
import React, { FC, useState } from 'react';

interface UpdateSongFormProps {
  song: { id: number; title: string; artist: string; album: string; genre: string };
  onUpdate: (updatedSong: { id: number; title: string; artist: string; album: string; genre: string }) => void;
}

const UpdateSongForm: FC<UpdateSongFormProps> = ({ song, onUpdate }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [genre, setGenre] = useState(song.genre);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !artist || !album || !genre) {
      alert('Please fill in all fields');
      return;
    }

    onUpdate({ id: song.id, title, artist, album, genre });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form input fields with initial values go here */}
      <button type="submit">Update Song</button>
    </form>
  );
};

export default UpdateSongForm;
