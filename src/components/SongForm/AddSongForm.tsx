// src/components/SongForm/AddSongForm.tsx
import React, { FC, useState } from 'react';

interface AddSongFormProps {
  onSubmit: (newSong: { title: string; artist: string; album: string; genre: string }) => void;
}

const AddSongForm: FC<AddSongFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !artist || !album || !genre) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit({ title, artist, album, genre });
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form input fields go here */}
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
