import Link from "next/link";
import styles from './dashboard.module.css'


export default function DashBoardPage(){
    
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.content}>Welcome to dashboard</p>
            <Link className={styles.link} href="/dashboard/settings">Go to settings</Link>
            <Link className={styles.link} href="/dashboard/profile">Go to profile</Link>
        </div>
    )
}