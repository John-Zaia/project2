import { EditForm } from "@/components/editForm";

export default async function editPage(props)
{
  const { id } = await props.params
  const data = await fetch(`http://localhost:4000/songs/${id}`);
  const songs = await data.json();
  return(
    <EditForm song={songs}/>
  )
}