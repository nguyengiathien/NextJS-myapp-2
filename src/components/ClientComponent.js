'use client'

export default function ClientComponent({ props }) {
    console.log(props)
    return (
        <div>
            <h1>Client Component</h1>
            <p>{props ? props.toString() : "No props"}</p>
        </div>
    )
}