import { useState } from "react";

export default function UserHook() {
    const [userList, setUserList] = useState("Bom dia caboclo");

    return {
        userList, 
        setUserList
    };
}

