import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const result = axios.get("http://localhost:8080/user");
        return NextResponse.json({test: "test11"});
    } catch(error:any) {
        return  NextResponse.json(
            {
                message: "网络异常"
            },    
        {
            status: error.response?.status || 500
        }
        
    )
    }
}