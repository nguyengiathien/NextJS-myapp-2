import Link from "next/link";
import { BlogData } from "../data";
import styles from './blog.module.css'
export async function generateStaticParams(){
    return BlogData.map(blog => ({blogId:blog.id}));
}
export default async function BlogPage({ params }) {
    console.log('rendered')
    const { blogId } = await params;
    console.log(blogId);
    const blog = BlogData.find(b => b.id === blogId)
    console.log(blog);
    return (

        <div className={styles.container}>
            {blog ? (
                <>
                    <h1 className={styles.title}>{blog.title}</h1>
                    <p className={styles.description}>{blog.decription}</p>
                </>
            ) :
                <h1 className={styles.title}>Blog not Found</h1>
            }
            <Link className={styles.btnBack} href="./blog">Back to Blog</Link>

        </div>
    )
}