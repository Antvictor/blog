"use client"

import { getUserList } from "@/services/user";
import { useEffect, useState } from "react";
type User = {
    test: string;
}
export default function Catogery() {
    const [userList, setUserList] = useState<User>();
    useEffect(() => {
        getUserList().then(res => {console.log(res.data.test);setUserList(res.data)}).catch(console.error)
    }, []);
    return (
        <div>
            {userList?.test}
        </div>
    );
}