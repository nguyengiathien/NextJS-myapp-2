'use client'
import { useRef } from "react"
import { useAppSelector, useAppDispatch } from "@/redux/hook" 
import { setPosts } from "@/redux/slices/posts.slice"

export default function PostsList({initialPosts}){
    const dispatch = useAppDispatch();
    const initalized = useRef(false);
    if (!initalized.current){
        dispatch(setPosts(initialPosts));
        initalized.current=true;
    }
    const posts = useAppSelector(state=>state.posts.list);
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}