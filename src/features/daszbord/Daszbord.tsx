import { useEffect, useState } from "react";
import { default as axios } from "axios";
import "./Daszbord.css";
import { Config } from "../../Config";
import { useTranslation } from 'react-i18next';
import { Soszials } from "../login/Soszials";

export const Daszbord: React.FC = () => {
    const { t } = useTranslation();
    const [userId, setUserId] = useState<string>("");

    useEffect(() => {
        Config.getAPIUrl().then((url) => {
            axios.get(`${url}/knurclubcourses/v1/twitch/info`, {headers: {Authorization: `${localStorage.getItem("token")}`}})
            .then((response) => {
                setUserId(response.data.id);
            }).catch((_e) => {
                console.error(_e);
                window.location.href = "/";
                localStorage.removeItem("token");
             });
        });

    }, []);

    const doWylizania = () => { 
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    return <>
        <h1 style={{ color: "white" }}>{ t("DASZBORD_WELCUM")} {userId}</h1>
        <button onClick={doWylizania}>{ t("LOGOUT") }</button>
        <Soszials />
    </>;
}