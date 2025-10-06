import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import GetStarted from './pages/GetStarted.tsx';
import LearnMore from './pages/LearnMore.tsx';
import Integrations from './pages/Integration.tsx';
import ViewMore from './pages/ViewMore.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/view-more" element={<ViewMore />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
