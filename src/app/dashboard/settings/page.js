import styles from './settings.module.css'

export default function SettingPage(){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Setting</h2>
            <p className={styles.content}>This is the setting page</p>
        </div>
    )
}