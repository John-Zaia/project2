'use server'

import { revalidatePath } from "next/cache";

export async function createSong(data){
    const songData = {
        id: data.get("id"),
        name: data.get("name"),
        length: data.get("length"),
        genre: data.get("genre"),
        releasedate: data.get("releasedate")
      };
    
      await fetch("http://localhost:4000/songs", {
        method: "POST", 
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            id: songData.id, 
            name: songData.name, 
            length: songData.length,
            genre: songData.genre,
            releasedate: songData.releasedate
          })
      });
    
    revalidatePath("/collection")
    revalidatePath("/admin")
}