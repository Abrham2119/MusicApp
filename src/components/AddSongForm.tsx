// src/components/SongForm/AddSongForm.tsx
import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addSong } from '../ store/slice/songsSlice';
import axios from 'axios';

interface AddSongFormProps {
  title: string; artist: string; album: string; genre: string 
}

const AddSongForm = () => {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
  })
 
  useEffect(()=>{
  console.log(songData)
  },[songData])

  const dispatch = useDispatch();
  const songs = useSelector((store:any)=> store.songs);

  
  const handleChange = (e:any)=>{
    
    const { name, value } = e.target;

    setSongData((songData)=>{
      return {
     ...songData,
        [name]: value
      }
    })
  }
  
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log(songData);
    
    await axios.post('http://localhost:5000/add-song',songData)
    
    .then((response)=> {
      console.log(response.data);
      
      dispatch(addSong(response.data))

    })
    .catch((error) => console.log(error))
    
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" value={songData.title} placeholder='Title'/>
      <input onChange={handleChange} name="artist" value={songData.artist} placeholder='Artist'/>
      <input onChange={handleChange} name="album" value={songData.album} placeholder='Album'/>
      <input onChange={handleChange} name="genre" value={songData.genre} placeholder='Genere'/>
      <button type="submit">Add Song</button>
    </form>
      {
        songs.map((song:AddSongFormProps)=>{
          return <h1>{song.title}</h1>
        })
      }
    </div>
  );
};

export default AddSongForm;
