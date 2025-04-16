import { NextResponse } from "next/server";
export type LastComment = {
    id: string;
    comment: string;
    aritle: string;
};
export async function GET() {
    return NextResponse.json({
        data: [{
            "id": "1234",
            "comment":"棒极了",
            "aritle":"安装Nacos"
        },
        {
            "id": "12345",
            "comment":"棒极了",
            "aritle":"什么是React"
        }
    ]
    })
}