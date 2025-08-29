import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request) {
    const body = await request.json();
    const { username, password } = body;

    if (username !== 'admin' || password !== 'password') {
        return NextResponse.json(
            { message: 'username hoac password khong chinh xac' },
            { status: 401 }
        )
    }

    const accessToken = 'fake-jwt-tokent-string-example';
    const cookieStore = await cookies();
    cookieStore.set('access_token', accessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
    return NextResponse.json({message:'Dang nhap thanh cong'});
}