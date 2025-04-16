import Link from 'next/link';
import styles from "./styles.module.css"

export default async function songCollection() {
  const data = await fetch('http://localhost:4000/songs'); 
  const songs = await data.json();

  return (
    <div>
        <div className={styles.list}>
        <h1>Songs</h1>
        {
            songs.map ( song => (
                <div key={song.id} className={styles.listItem}>
                    <div>ID: {song.id}</div>
                    <div>Name: {song.name}</div>
                    <Link className={styles.link} href={`/collection/${song.id}`}>More</Link>
                </div>
            ))
        }
        </div>
    </div>
  );
}