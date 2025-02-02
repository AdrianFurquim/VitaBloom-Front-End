import { useState } from "react";

export default function UserHook() {
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    return {
        userId, 
        setUserId,
        userName, 
        setUserName, 
        userEmail, 
        setUserEmail, 
        userPassword,
        setUserPassword
    };
}

