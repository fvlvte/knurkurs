
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoginView } from './features/login/LoginView';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { OAuthFlow } from './features/login/OAuthFlow';
import { Daszbord } from './features/daszbord/Daszbord';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/oauth-flow",
    element: <OAuthFlow />
  },
  {
    path: "/daszbord",
    element: <Daszbord />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div style={{ backgroundColor: "black" }}>
    <RouterProvider router={router} />
  </div>
);

reportWebVitals();