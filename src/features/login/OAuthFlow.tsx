import { default as axios } from "axios";
import { useEffect } from "react";
import { Config } from "../../Config";
import { useTranslation } from "react-i18next";

export const OAuthFlow: React.FC = () => {
    const CODE = new URLSearchParams(window.location.search).get("code");

    const { t } = useTranslation();

    useEffect(() => {
        Config.getAPIUrl().then((url) => { 
        axios.post(`${url}/knurclubcourses/v1/twitch/oauth`, { code: CODE })
            .then((response) => {
                localStorage.setItem("token", response.data.authtoken);
                window.location.href = "/daszbord";
            }).catch((_e) => {
                console.error(_e);
                alert(t("OAUTH_LOGIN_ERROR"));
                window.location.href = "/";
             });
        });
      
    }, [CODE, t]);
    
    return <><h2 style={{color: "white"}}>CZEKAJ PRZETWARZAM MORDO DAJ MI HWILE OK ...</h2></>;
}