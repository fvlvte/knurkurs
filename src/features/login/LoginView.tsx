import { useEffect } from 'react';
import './LoginView.css';
import { useTranslation } from 'react-i18next';

export const LoginView: React.FC = () => {
    const { t } = useTranslation();
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "z4ngv8hovfeaq7rstf7egijqn351wu";
    const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL || "http://localhost:3001/oauth-flow";

    const SZKOPY = ["user:read:subscriptions"];

    const makeRedirectUrl = (clientId: string, redirectUrl: string) => {
    return `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${SZKOPY.join(
      "+",
    )}`;
  };
    const doTwitchAuth = () => {
        window.location.href = makeRedirectUrl(CLIENT_ID, REDIRECT_URL);
    };
  
  useEffect(() => {
    if(localStorage.getItem("token")) window.location.href = "/daszbord";
  }, [])

    return <div className='kołtainer'>
        <div className='login'>
            <img className="logo" alt="knur" src="logo.png"/>
            <h1>{t("YES-CODE Course")}</h1>
            <h2>{t("LOGIN")}</h2>
            <button onClick={doTwitchAuth}>{t("LOGIN WITH TWITCH")}</button>
        </div>
    </div>;
}