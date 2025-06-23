import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

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
    <HashRouter>
      <Routes>
        <Route path="/fitlinehealth.fit/" element={<LandingPage />} />
        <Route path="/fitlinehealth.fit/privacy" element={<PrivacyPolicy />} />
        <Route path="/fitlinehealth.fit/terms" element={<TermsOfUse />} />
        <Route path="/fitlinehealth.fit/cookies" element={<CookiePolicy />} />
        <Route
          path="/fitlinehealth.fit/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/fitlinehealth.fit/login" element={<Login />} />
        <Route path="/fitlinehealth.fit/logout" element={<Logout />} />
        <Route
          path="/fitlinehealth.fit/register"
          element={<RegisterAndLogout />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
