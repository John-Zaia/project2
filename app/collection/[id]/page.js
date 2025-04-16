import Link from 'next/link';
import styles from "./styles.module.css";

export default async function SongDetail(props) {

    const { id } = await props.params
    const data = await fetch(`http://localhost:4000/songs/${id}`);

    if (!data.ok)
      {
        return `No song with the ID ${id} exists.`;
      }
    const song = await data.json();

    return(
      <div className={styles.container}>
        <Link className={styles.link} href={`/collection`}>Back</Link>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.item}>ID</th>
              <th className={styles.item}>Name</th>
              <th className={styles.item}>Length</th>
              <th className={styles.item}>Genre</th>
              <th className={styles.item}>Release Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.item}>{song.id}</td>
              <td className={styles.item}>{song.name}</td>
              <td className={styles.item}>{song.length}</td>
              <td className={styles.item}>{song.genre}</td>
              <td className={styles.item}>{song.releasedate}</td>
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