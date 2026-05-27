import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import DSA from "./pages/dashboard/DSA";
import Aptitude from "./pages/dashboard/Aptitude";
import Resume from "./pages/dashboard/Resume";
import MockInterview from "./pages/dashboard/MockInterview";
import Roadmap from "./pages/dashboard/Roadmap";
import Analytics from "./pages/dashboard/Analytics";
import Goals from "./pages/dashboard/Goals";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="dsa" element={<DSA />} />
        <Route path="aptitude" element={<Aptitude />} />
        <Route path="resume" element={<Resume />} />
        <Route path="mock-interview" element={<MockInterview />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="goals" element={<Goals />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}