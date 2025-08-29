"use client"
import styles from "./login.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/login',{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({username,password})
            })
            if (res.ok){
                alert('login successful!');
                router.push('/dashboard');
            } else {
                const data = await res.json();
                alert(data.message||"Login failed");
            }
        } catch (err) {
            alert('Da co loi xay ra')
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label className={styles.label} htmlFor="username">Username:</label>
                    <input className={styles.input} type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                </div>

                <div>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input className={styles.input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="submit" className={styles.btnSubmit}>Login</button>
            </form>
            <button onClick={() => router.back()} className={styles.btnCancel}>
                Go Back
            </button>
        </div>
    )
}