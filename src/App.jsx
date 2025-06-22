import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@pages/Login";
import Register from "@pages/Register";
import Dashboard from "@pages/Dashboard";
import LandingPage from "@pages/LandingPage/LandingPage";
import NotFound from "@pages/NotFound";
import PrivacyPolicy from "@pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "@pages/TermsOfUse/TermsOfUse";
import CookiePolicy from "@pages/CookiePolicy/CookiePolicy";
import ProtectedRoute from "@components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
