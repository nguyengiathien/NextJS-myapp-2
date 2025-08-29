

async function fetchData() {
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return "du lieu da duoc tai tu slow component"
}


export default async function SlowComponent(){
    const data = await fetchData();
    return (
        <div>
            <h3>Slow Component</h3>
            <p>{data}</p>
        </div>
    )
}