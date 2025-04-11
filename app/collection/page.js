import Link from 'next/link';

export default async function songCollection() {
  const data = await fetch('http://localhost:4000/songs'); 
  const songs = await data.json();

  return (
    <div>
        <h1>Songs</h1>
        <div>
        {
            songs.map ( song => (
                <div key={song.id}>
                    <div>ID: {song.id}</div>
                    <div>Name: {song.name}</div>
                    <Link href={`/collection/${song.id}`}>More</Link>
                </div>
            ))
        }
        </div>
    </div>
  );
}