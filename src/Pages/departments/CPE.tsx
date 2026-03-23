import { CPE } from "../../data/department/CPE";
import "../../styles/departments/CPE.css";
import DepartmentPage from "./DepartmentPage";

export default function CPEPage() {
  return <DepartmentPage baseDept={CPE} />;
}
