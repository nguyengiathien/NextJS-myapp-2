import { NextResponse } from "next/server";

export async function  GET(request) {
    const timestamp = new Date().toISOString();
    console.log(`API /api/timestamp/called at: ${timestamp} ` );
    return NextResponse.json({timestamp});
}