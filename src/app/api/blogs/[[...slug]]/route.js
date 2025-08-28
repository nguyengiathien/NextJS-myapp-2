import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { slug } = await params;
    if (slug) {
        return NextResponse.json({
            message: `Ban dang xem bai viet tai slug :${slug.join('/')}`,
            segments: slug
        })
    }
    return NextResponse.json({
        message: `Ban dang xem bai viet khong co segments`,
        segments: []
    })
}