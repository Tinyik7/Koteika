import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/base/typography.css";
import "./styles/base/reset.css";
import "./styles/components/nav.css";
import "./styles/layout/app.css";
import "./styles/layout/header.css";
import "./styles/layout/container.css";
import "./styles/layout/footer.css";
import "./styles/layout/poster.css"
import './styles/components/Banner.css';
import './styles/layout/OurRooms.css';
import './styles/layout/OurRooms.css';
import './styles/components/SuperLux.css'
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
