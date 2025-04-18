import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        // const result = axios.get("http://localhost:8080/user");
        return NextResponse.json([
            {title: "安装Nacos",
            createTime: "2025-01-01",
            tags: ["cloud", "nacos"],
            content: `#安装Nacos
## 下载
从[官网](https://nextjs.org/docs/messages/next-router-not-mounted)下载`,
            previewTime: 5,
            author: 'ant',
            id: '1221'},
            {title: "启动Nacos",
                createTime: "2025-01-01",
                tags: ["cloud", "nacos"],
                content: `# 启动Nacos
\`\`\`bash
sh startup.sh
\`\`\``,
                previewTime: 5,
                author: 'ant',
                id: '1221'},
        ]
        );
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