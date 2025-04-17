import { Col, Divider, Row, Tag } from "antd";
import Link from "next/link";
import './aritle_block.moudle.css'
import MarkdownView from "../article/info/markdown_view";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
type AritleBlock = ({
    title: string,
    createTime: string,
    tags: string[],
    content: string,
    previewTime: number,
    author: string,
    id: string

});
export default function AritleBlock({title, createTime, tags, content, previewTime, author,id }: AritleBlock) {
     // 定义颜色数组
  const colors = [
    'magenta', 'red', 'volcano', 'orange', 'gold', 
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'
  ];
    const router = useRouter();
    const randomColors = useMemo(() => {
        return tags.map(() => colors[Math.floor(Math.random() * colors.length)]);
      }, [tags]); // 依赖 tags，确保 tags 变化时重新计算颜色
    
    return (
      <Col onClick={(e) => {
        e.stopPropagation();
        router.push(`/aritle/info/${id}`);
      }}>
        <p>
            <h1>{title}</h1>
            <span style={{marginRight: '10px', color: "rgba(197,197,197)"}}>作者：{author}</span>
            <span style={{marginRight: '10px', color: "rgba(197,197,197)"}}>创建时间：{createTime}</span>
            <span style={{marginRight: '10px', color: "rgba(197,197,197)"}}>预计预览时间：{previewTime} 分钟</span>
            tags: 
            {tags.map((tag, index)=>{
                return  <Tag color={`${randomColors[index]}`} onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/tags/${tag}`)}} key={tag}>{tag}</Tag>;
            })}
        </p>
        <div className="wrapper">
            <div className="text">
                <MarkdownView content={content} />
            </div>
        </div>
      </Col>  
    );
}