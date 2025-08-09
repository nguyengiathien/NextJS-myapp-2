import ClientComponent from "./ClientComponent";
import Another from "./AnotherServerComponent";
export default function ServerComponent(){
    return(
        <div>
            <h1>Server Component</h1>
            <ClientComponent>
                <Another/>
            </ClientComponent>
        </div>
    )
}