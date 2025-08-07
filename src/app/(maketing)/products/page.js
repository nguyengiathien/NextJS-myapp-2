import Link from "next/link"
import { productData } from "./data"
import styles from './product.module.css'
export default function ProductsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product Page</h1>
            <div className={styles.productList}>
                {productData.map((product)=>(
                    <div key={product.id} className={styles.productCard}>
                        <h2 className={styles.title}>{product.title}</h2>
                        <p className={styles.decription}>{product.decription}</p>
                        <Link className={styles.detailLink} href={`/products/${product.id}`}>View Detail</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}