"use client"
import styles from "./login.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            router.push('/dashboard')
        } else {
            alert("Invalid username or password");
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="submit" className={styles.btnSubmit}>Login</button>
            </form>
            <button onClick={() => router.back()} className={styles.btnCancel}>
                Go Back
            </button>
        </div>
    )
}