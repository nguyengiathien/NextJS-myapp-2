import SlowComponent from "./slow-component";
import React, { Suspense } from "react";

function LoadingFallBack() {
    return (
        <div>
            <h1>Dang tai slow component</h1>
            <p>Vui long doi khi du lieu tai</p>
        </div>
    )
}

export default function StreamingSamplePage() {
    return (
        <div>
            <h1>Streaming Example Page</h1>
            <p>Phan nay se hien thi lap tuc</p>
            <Suspense fallback={<LoadingFallBack/>}>
                <SlowComponent />
            </Suspense>
            <p>Hien thi sau SlowComponent</p>
        </div>
    )
}