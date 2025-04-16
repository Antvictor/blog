import  MarkdownIt  from 'markdown-it';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import { useMemo } from 'react';
// 引入 highlight.js 样式
import 'highlight.js/styles/atom-one-dark.css';

interface Props{
    content: string
}

const md = new MarkdownIt("default",
    
     {html: true,
        linkify: true,
        typographer: true,
        highlight: (str: string, lang: string): string => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              // 高亮代码
              return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`;
            } catch (e) {
              console.error("Highlight error:", e);
            }
          }
          // 如果没有语言，直接渲染为普通代码块
          return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
        }
      }
    
)

export default function MarkdownView({content}: Props) {
    const render = useMemo(()=>{
      return DOMPurify.sanitize(md.render(content));
    }, [content]);

    return (
        <div 
            className='morkdown-content'
            dangerouslySetInnerHTML={{__html: render}}
        />
    );
}