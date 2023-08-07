import { useEffect, useState } from "react";
import { default as axios } from "axios";
import "./Daszbord.css";

export const Daszbord: React.FC = () => {
    const [userId, setUserId] = useState<string>("");
    useEffect(() => {
        axios.get("http://localhost:80/knurclubcourses/v1/twitch/info", {headers: {Authorization: `${localStorage.getItem("token")}`}})
            .then((response) => {
                setUserId(response.data.id);
            }).catch((_e) => {
                console.error(_e);
                alert("SORY BYKU NIE MASZ SUBA W KURNIKU ALBO SERVER SIE WYWALIŁ XPP");
                window.location.href = "/";
                localStorage.removeItem("token");
             });
    }, []);
    return <><h1 style={{color: "white"}}>WITAJ PONCZUSIU SŁODZIUTKU O ID {userId}</h1></>;
}