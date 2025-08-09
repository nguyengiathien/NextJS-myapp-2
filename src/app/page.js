import Image from "next/image";
import styles from "./page.module.css";
import ServerComponent from "@/components/SeverComponent";
import InteractiveWelcome from "@/components/InteractiveWelcome/InteractiveWelcome";
import ClientComponent from "@/components/ClientComponent";
export default async function Home({ searchParams }) {
  const { keyword } = await searchParams;
  console.log(keyword)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p className={styles.description}>This is my app</p>
      <p>{keyword}</p>
      <InteractiveWelcome></InteractiveWelcome>
    </div>
  );
}
