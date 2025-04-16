import Link from 'next/link';
import { deleteSong } from "./actions.js";
import styles from "./styles.module.css";

export default async function songCollection() {
  const data = await fetch('http://localhost:4000/songs'); 
  const songs = await data.json();

  return (
    <div className={styles.container}>
        <Link className={styles.link} href="/admin/create">Songs</Link>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.item}>ID</th>
                    <th className={styles.item}>Name</th>
                    <th className={styles.item}>Length</th>
                    <th className={styles.item}>Genre</th>
                    <th className={styles.item}>Release Date</th>
                    <th className={styles.item}>Delete</th>
                    <th className={styles.item}>Edit</th>
                </tr>
            </thead>
            {
                songs.map ( song => (
                    <tbody key={song.id}>
                        <tr>
                            <td className={styles.item}>{song.id}</td>
                            <td className={styles.item}>{song.name}</td>
                            <td className={styles.item}>{song.length}</td>
                            <td className={styles.item}>{song.genre}</td>
                            <td className={styles.item}>{song.releasedate}</td>
                            <td className={styles.item}>
                            <form action={deleteSong.bind(null, song.id)}>
                                <input type="submit" value="D" className={styles.linkButton}/>
                            </form>
                            </td>
                            <td className={styles.item}><Link className={styles.link} href={`/admin/edit/${song.id}`}>E</Link></td>
                        </tr>
                    </tbody>
                ))
            }
        </table>
    </div>
  );
}