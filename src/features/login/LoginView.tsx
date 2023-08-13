import { useEffect, useState } from 'react';
import './LoginView.css';
import { useTranslation } from 'react-i18next';
import { LoginButton } from './LoginButton';
import { Soszials } from './Soszials';
import { RedirectButton } from './RedirectButton';
import { DropdownButton } from './DropDownButton';

export const LoginView: React.FC = () => {
  const [zmienna, setZmienna] = useState<number>(2);
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
    if (localStorage.getItem("token")) window.location.href = "/daszbord";
  }, [])

  return <div className='kołtainer'>
    <div className='login'>
      <img className="logo" alt="knur" src="logo.png" />
      <h1>{t("YES-CODE Course")}</h1>
      {1 === 1 && <h2>Kocham widzuw</h2>}
      <div>{zmienna}</div>
      <button onClick={() => setZmienna((poprzedniStan) => poprzedniStan + 1)}>Dodaj 1</button>
      <LoginButton onLoginClick={doTwitchAuth} />
      <RedirectButton />
    </div>
    <Soszials />
  </div>
}
