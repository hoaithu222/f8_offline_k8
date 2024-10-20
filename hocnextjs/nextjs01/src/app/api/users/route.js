// quy ước : Tên HTTP Method sẽ là tên hàm 
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET(request) {
    const status = request.nextUrl.searchParams.get("status");
    // console.log(status);
    console.log(request.headers);
    const apiKey = request.headers.get("x-api-key");
    console.log(apiKey);
    const users = [
        {
            id: 1,
            name: "User1",
        },
        {
            id: 2,
            name: "User2",
        },
    ]
    return NextResponse.json({
        success: true,
        data: users,
        message: "Get users successfully"
    },
        {
            status: 201,
        })
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ body });
}