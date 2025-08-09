'use client'
import React from "react"
import { useParams } from "next/navigation"
export default function BlogIdDisplay(){
    const {blogId} = useParams();
    return (
        <div>Blog ID Display: {blogId}</div>
    )
}