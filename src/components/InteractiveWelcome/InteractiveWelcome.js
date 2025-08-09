'use client'
import styles from './interactive-welcome.module.css'
import { useState } from "react"
import React from 'react'
import { useSearchParams } from 'next/navigation'
export default function InteractiveWelcome(){
    const [message,setMessage]=useState('')
    const searchParams= useSearchParams()
    const keyword = searchParams.get('keyword');
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Interactive Welcome</h2>
            <p className={styles.message}>{message}</p>
            <button className={styles.button} onClick={(()=>setMessage(keyword))}>Click me</button>
        </div>
    )
}