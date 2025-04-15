'use client'
import { useState } from 'react'
import { updateSong} from '@/app/admin/edit/actions'

export function EditForm({ song }){
    const [songData, setSongData] = useState({
        id: song.id,
        name: song.name,
        length: song.length,
        genre: song.genre,
        releasedate: song.releasedate
    } ) 

    const handleEdit = (e) => {
        setSongData({ ...songData, [e.target.name]: e.target.value });
      };

    async function handleSubmit(e){
        e.preventDefault();
        await updateSong(songData)
    }   

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Song ID: </label>&nbsp;
            <input type="text" name="name" id="id" defaultValue={songData.id} onChange={handleEdit}/> <br/>

            <label htmlFor="name">Song Name:</label>&nbsp;
            <input type="text" name="name" id="name" defaultValue={songData.name} onChange={handleEdit}/> <br/>

            <label htmlFor="length">Length:</label>&nbsp;
            <input type="number" step="0.01" name="length" id="length" defaultValue={songData.length} onChange={handleEdit}/> <br/> 

            <label htmlFor="genre">Genre:</label>&nbsp;
            <input type="text" name="genre" id="genre" defaultValue={songData.genre} onChange={handleEdit}/> <br/> 

            <label htmlFor="releasedate">Release Date:</label>&nbsp;
            <input type="number" name="releasedate" id="releasedate" defaultValue={songData.releasedate} onChange={handleEdit}/> <br/> 

            <input type="submit" value="Create Song" />
        </form>
    </div>
  )
}
