import { default as axios } from "axios";
import { useEffect } from "react";

export const OAuthFlow: React.FC = () => {
    const CODE = new URLSearchParams(window.location.search).get("code");

    useEffect(() => {
        axios.post("http://localhost:80/knurclubcourses/v1/twitch/oauth", { code: CODE })
            .then((response) => {
                localStorage.setItem("token", response.data.authtoken);
                window.location.href = "/daszbord";
            }).catch((_e) => {
                console.error(_e);
                alert("SORY BYKU NIE MASZ SUBA W KURNIKU ALBO SERVER SIE WYWALIŁ XPP");
                window.location.href = "/";
             });
    }, [CODE]);
    
    return <><h2 style={{color: "white"}}>CZEKAJ PRZETWARZAM MORDO DAJ MI HWILE OK ...</h2></>;
}