import Link from 'next/link';

export default async function SongDetail(props) {

    const { id } = await props.params
    const data = await fetch(`http://localhost:4000/songs/${id}`);

    if (!data.ok)
      {
        return `No song with the ID ${id} exists.`;
      }
    const song = await data.json();

    return(
      <div>
        <Link href={`/collection`}>Back</Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Length</th>
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{song.id}</td>
              <td>{song.name}</td>
              <td>{song.length}</td>
              <td>{song.genre}</td>
              <td>{song.releasedate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

export async function generateStaticParams(){
    const data = await fetch(`http://localhost:4000/songs`);
    const songs = await data.json();

    const firstTenSongs = songs.slice(0, 10)
    return firstTenSongs.map((song) => ({
        id: song.id.toString()
    }))
}