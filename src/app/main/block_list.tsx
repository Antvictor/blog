 import type { AritleInfos } from "./article_block";
 import AritleBlock from "./article_block";
 type Props = {
    list: AritleInfos[];
 }
 const BlockList = function ({list}: Props){
    console.log("typeof list", typeof list);  // 应该是 "object"
    console.log("Array.isArray(list)", Array.isArray(list));  // 应该是 true
    const blockList = list.map(block => {
        return <AritleBlock  {...block} key={block.id}/>
    });

    return (
        <div style={{paddingLeft: '20%', paddingRight: '20%',  background: "#ffffff"}}>
            {blockList}
          </div>
    );
}
export default BlockList;