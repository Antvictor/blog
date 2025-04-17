import { List } from "antd";
import { useEffect, useState } from "react";
import { LastComment } from "../api/comment/last/route";
import { getLastComment } from "@/services/comment";

export default function LastComments({...className}) {
    const [data, setData] = useState<LastComment[]>();
    useEffect(() => {
        getLastComment().then((res) => setData(res.data.data));
    },[])
    return (
        < >
            <List
            header="最新评论" 
            itemLayout="horizontal"
            bordered
            {...className}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta 
                        title={item.aritle}
                        description={item.comment}
                        key={item.id}
                    />
                </List.Item>
            )}
            >

            </List>
        </>
    );
};