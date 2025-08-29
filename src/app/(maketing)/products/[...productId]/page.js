import Link from "next/link"
import { productData } from "../data"
import styles from './productId.module.css'
import { revalidateProductPath } from "./action";

export async function generateStaticParmas() {
    return productData.map(product => ({productId:product.id}));
}

export default async function ProductDetail({ params }) {
    const { productId } = await params
    const sId = productId[0]
    const product = productData.find(p => p.id.toString() === sId.toString())
    console.log(product)
    console.log(productId);
    console.log(sId)

    const timestamp = new Date().toISOString();

    return (
        <div className={styles.container}>
            {product ? (
                <>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.decription}>{product.decription}</p>
                    <Link className={styles.detailLink} href="/products">Back</Link>
                    <p>Create timestamp: {timestamp}</p>

                    <form action={revalidateProductPath}>
                        <input 
                            type='hidden'
                            name='path'
                            value={`/products/${productId}`} 
                        />
                        <button type='submit'>Remove cache this page</button>
                        
                    </form>
                </>
            ) : (
                <h1>Product not Found</h1>
            )}
        </div>
    )
}   