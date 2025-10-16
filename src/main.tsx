import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import GetStarted from './pages/GetStarted.tsx';
import LearnMore from './pages/LearnMore.tsx';
import Integrations from './pages/Integration.tsx';
import ViewMore from './pages/ViewMore.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import ConnectCalendar from './pages/ConnectCalendar.tsx';

function PostSignupGate({ children }: { children: React.ReactNode }) {
  const flag = typeof window !== 'undefined' ? localStorage.getItem('postSignup') : null;
  if (!flag) return <Navigate to="/" replace />;
  return <>{children}</>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/view-more" element={<ViewMore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/connect-calendar"
          element={
            <PostSignupGate>
              <ConnectCalendar />
            </PostSignupGate>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
