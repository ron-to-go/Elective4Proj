import { Routes, Route, Navigate } from "react-router-dom";
import DepartmentSelect from "./Pages/DepartmentSelect";
import LandingAdminPage from "./Pages/LandingAdminPage";
import CEAdminPage from "./Pages/admin/CEAdmin";
import CPEAdminPage from "./Pages/admin/CPEAdmin";
import ECEAdminPage from "./Pages/admin/ECEAdmin";
import EEAdminPage from "./Pages/admin/EEAdmin";
import IEAdminPage from "./Pages/admin/IEAdmin";
import MEAdminPage from "./Pages/admin/MEAdmin";
import MEEAdminPage from "./Pages/admin/MEEAdmin";
import MFEAdminPage from "./Pages/admin/MFEAdmin";
import LandingPage from "./Pages/LandingPage";
import CEPage from "./Pages/departments/CE";
import CPEPage from "./Pages/departments/CPE";
import ECEPage from "./Pages/departments/ECE";
import EEPage from "./Pages/departments/EE";
import IEPage from "./Pages/departments/IE";
import MEPage from "./Pages/departments/ME";
import MEExcellencePage from "./Pages/departments/MEExcellence";
import MEEPage from "./Pages/departments/MEE";
import MFEPage from "./Pages/departments/MFE";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<LandingAdminPage />} />
        <Route path="/departments" element={<DepartmentSelect />} />
        <Route path="/dept/CE" element={<CEPage />} />
        <Route path="/dept/CPE" element={<CPEPage />} />
        <Route path="/dept/ECE" element={<ECEPage />} />
        <Route path="/dept/EE" element={<EEPage />} />
        <Route path="/dept/IE" element={<IEPage />} />
        <Route path="/dept/ME" element={<MEPage />} />
        <Route path="/dept/ME/excellence" element={<MEExcellencePage />} />
        <Route path="/dept/MEE" element={<MEEPage />} />
        <Route path="/dept/MFE" element={<MFEPage />} />
        <Route path="/dept/CE/admin" element={<CEAdminPage />} />
        <Route path="/dept/CPE/admin" element={<CPEAdminPage />} />
        <Route path="/dept/ECE/admin" element={<ECEAdminPage />} />
        <Route path="/dept/EE/admin" element={<EEAdminPage />} />
        <Route path="/dept/IE/admin" element={<IEAdminPage />} />
        <Route path="/dept/ME/admin" element={<MEAdminPage />} />
        <Route path="/dept/MEE/admin" element={<MEEAdminPage />} />
        <Route path="/dept/MFE/admin" element={<MFEAdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
