import Link from 'next/link';
import { deleteSong } from "./actions.js";

export default async function songCollection() {
  const data = await fetch('http://localhost:4000/songs'); 
  const songs = await data.json();

  return (
    <div>
        <h1>Songs</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Length</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            {
                songs.map ( song => (
                    <tbody key={song.id}>
                        <tr>
                            <td>{song.id}</td>
                            <td>{song.name}</td>
                            <td>{song.length}</td>
                            <td>{song.genre}</td>
                            <td>{song.releasedate}</td>
                            <td>
                            <form action={deleteSong.bind(null, song.id)}>
                                <input type="submit" value="D" />
                            </form>
                            </td>
                            <td><Link href="">E</Link></td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                ))
            }
        </table>
    </div>
  );
}