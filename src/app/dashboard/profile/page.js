
import styles from './profile.module.css'


export default function ProfilePage(){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Profile</h2>
            <p className={styles.content}>This is the profile page</p>
        </div>
    )
}