import StoreProvider from "./StoreProvider";
import PostsList from "@/components/PostsList/PostsList";
async function getPosts(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok){
    throw new Error('failed to fetch posts');
  }
  return res.json();
}
export default async function Home() {
  const initialPosts = await getPosts(); 
  return (
    <StoreProvider>
      <main>
        <h1>Welcome to Post App</h1>
        <PostsList initialPosts={initialPosts}></PostsList>
      </main>
    </StoreProvider>
  );
  
}
