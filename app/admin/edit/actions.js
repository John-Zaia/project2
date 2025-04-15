'use server'

import { revalidatePath } from "next/cache"

export async function updateSong(data){
    await fetch(`http://localhost:4000/songs/${data.id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    revalidatePath("/collection")
    revalidatePath(`/collection/${data.id}`)
    revalidatePath("admin")
    revalidatePath(`/admin/edit/${data.id}`)
}