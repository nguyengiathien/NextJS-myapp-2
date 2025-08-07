import Link from "next/link"
import { productData } from "../data"
import styles from './productId.module.css'

export default async function ProductDetail({ params }) {
    const { productId } = await params
    const sId = productId[0]
    const product = productData.find(p => p.id.toString() === sId.toString())
    console.log(product)
    console.log(productId);
    console.log(sId)

    return (
        <div className={styles.container}>
            {product ? (
                <>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.decription}>{product.decription}</p>
                    <Link className={styles.detailLink} href="/products">Back</Link>
                </>
            ) : (
                <h1>Product not Found</h1>
            )}
        </div>
    )
}   