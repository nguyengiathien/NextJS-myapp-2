import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = request.nextUrl;
    const name = searchParams.get('name')||'Guest';
    const age = searchParams.get('age')||'unknown';
    
    const headersList = headers(); 
    const userAgent = (await headersList).get('user-agent')||'unknown';
    const authHeader = headersList.get('Authorization')||'not provided';
    
    return NextResponse.json({ 
        message: `Hello ${name}`,
        age: age,
        userAgent: userAgent,
        authHeader: authHeader,
    });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({
        message: `Hello ${body.name}`,
        age: body.age,
    })
}