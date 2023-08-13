import "./LoginButton.css";

interface Props {
  onLoginClick: () => void;
};

export const LoginButton: React.FC<Props> = (props: Props) => {
  return <button onClick={props.onLoginClick} className="loginButtonContainer">
    <span className="loginButtonText">ZALOGUJ Z</span>
    <img className="logo" alt="knur" src="twiczlogo.svg" />
  </button>;
}