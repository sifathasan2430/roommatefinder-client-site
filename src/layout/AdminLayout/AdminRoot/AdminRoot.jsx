
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Dashboard/DashboardSidebar";

const AdminRoot = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminRoot;