'use client'
import { ClearTimeStampCache } from "./action";

async function fetchData() {
    console.log('Fetching data...');
    const response = await fetch('http://localhost:3000/api/timestamp',
        {
            // cache: "force-cache",
            next:{
                revalidate:60
            }
        }
    )
    if (!response.ok){
        throw new Error('Failed to fetch data');
    }
    return response.json();
}

export default async function CachedDataPage() {
    const data1 = await fetchData();
    await new Promise((resolve)=>setTimeout(resolve,2000));
    const data2 = await fetchData();
    return(
        <div>
            <h1>Cached Data</h1>
            <p>Data1:{data1.timestamp}</p>
            <p>Data2:{data2.timestamp}</p>
            <p>{process.env.SERVER_SECRET_KEY}</p>
            <form action={ClearTimeStampCache}>
                    <button type="submit">Delete cache Timestamp</button>
            </form>
            
        </div>
    )
}