import Link from "next/link"
import styles from './dashboardLayout.module.css'
export default function DashBoardLayOut({ children }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard Layout</h1>
            <nav>
                <ul className={styles.sidebar}>
                    <li>
                        <Link href='/dashboard'>Overview</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/settings'>Settings</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/setting'>Profile</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}