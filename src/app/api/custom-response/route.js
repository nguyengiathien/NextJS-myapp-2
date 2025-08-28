import { NextResponse } from "next/server";

export async function  GET(request) {

    const customHeader = new Headers();
    customHeader.set('X-Custom-Header','Custom-Value');

    const data ={
        message:'Hello',
        timestamp: new Date().toISOString(),
        status:'success'
    }
    return new NextResponse(
        JSON.stringify(data),
        {
            status:200,
            headers: customHeader,
        }
    );
}