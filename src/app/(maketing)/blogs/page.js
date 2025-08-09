import Link from "next/link";
import styles from './blogs.module.css'
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}
export default async function BlogPage() {
    const [posts, users] = await Promise.all(
        [
            fetchPosts(),
            fetchUser(),
        ]
    )


    // const posts = await fetchPosts();
    // const users = await fetchUser();
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blogs Page</h1>
            <section>
                <h2>Users</h2>
                <ul className={styles.BlogList}>
                    {users.map(user=>(
                        <li className={styles.BlogCard} key={user.id}>
                            <h3 className={styles.Blogtitle}>{user.name}</h3>
                            <p className={styles.description} >{user.email}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Blogs</h2>
                <ul className={styles.BlogList}>
                    {posts.map(post => (
                        <li className={styles.BlogCard} key={post.id}>
                            <h3 className={styles.Blogtitle}>{post.title}</h3>
                            <p className={styles.description}>{post.body}</p>
                            <Link className={styles.detailLink} href={`/blogs/${post.id}`}>Read more</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}