'use server'
import { revalidatePath } from "next/cache"

export async function deleteSong(id){
    const res = await fetch(`http://localhost:4000/songs/${id}`,
                            {method: "DELETE"}
    )

    revalidatePath("/collection")
    revalidatePath(`/collection/${id}`)
    revalidatePath("/admin")
}
