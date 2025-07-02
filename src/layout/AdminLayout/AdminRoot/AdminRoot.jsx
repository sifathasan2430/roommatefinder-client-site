import { Outlet } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";


const AdminRoot = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen gap-10 bg-gray-50">
      {/* Sidebar - fixed width */}
      <div className=" md:col-span-3 lg:col-span-2 border-r ">
        <Sidebar />
      </div>

      {/* Content area - accounts for sidebar width */}
      <div className="col-span-8 md:col-span-9 lg:col-span-10">
        <div className="px-4 md:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminRoot;