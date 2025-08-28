import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        throw new Error('Loi gia lap');
        return NextResponse.json({ message: 'Thanh Cong' });
    } catch (error) {
        return NextResponse.json(
            {
                message: "da xay ra loi khi xu ly yeu cau",
                error:error.message,
                code: '001'
            },
            {
                status:500
            }
        )
    }
}