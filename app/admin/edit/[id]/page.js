import { EditForm } from "@/components/editForm";

export default async function Page()
{
  const data = await fetch("http://localhost:4000/songs");
  const songs = await data.json();
  return(
    <EditForm />
  )
}