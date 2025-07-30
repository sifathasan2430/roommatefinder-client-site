import { NavLink } from "react-router-dom";
import { Menu, Plus, List, LayoutDashboard } from "lucide-react";

const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
        isActive ? "bg-[#ff8c00] text-white" : "hover:bg-muted"
      }`
    }
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </NavLink>
);

const DashboardSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md border-r hidden md:block p-4">
      <div className="mb-6 text-xl font-semibold flex items-center gap-2 text-[#ff8c00]">
        <Menu className="w-5 h-5" />
        Dashboard
      </div>
      <nav className="flex flex-col gap-2 text-sm">
        <SidebarLink to="/dashboard/adminOverView" icon={LayoutDashboard} label="Overview" />
        <SidebarLink to="/dashboard/add-listing" icon={Plus} label="Add Listing" />
        <SidebarLink to="/dashboard/listings" icon={List} label="Listings" />
      </nav>
    </aside>
  );
};

export default DashboardSidebar;