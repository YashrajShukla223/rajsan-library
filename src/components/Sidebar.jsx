import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, BarChart3, MapPin } from "lucide-react";

// navLinks array is similar to a MUI List with ListItems and icons
const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/facilities", label: "Facilities", icon: BookOpen },
  { to: "/stats", label: "Stats", icon: BarChart3 },
  { to: "/location", label: "Location", icon: MapPin },
  { to: "/gallary", label: "RajSan Gallery", icon: BookOpen },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    // Tailwind: bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700
    // MUI: sx={{ background: 'linear-gradient(to bottom, #1e3a8a, #1e40af, #1e429f)' }}
    // Tailwind: rounded-r-3xl shadow-xl
    // MUI: borderRadius: '0 1.5rem 1.5rem 0', boxShadow: 6
    <aside className="h-full min-h-screen w-56 flex flex-col gap-4 p-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 rounded-r-3xl shadow-xl">
      {/* Tailwind: flex items-center gap-3 mb-8
          MUI: <Box display="flex" alignItems="center" gap={1} mb={4}> */}
      <div className="mb-8 flex items-center gap-3">
        {/* Tailwind: text-white text-2xl font-bold tracking-wide
            MUI: <Typography color="white" variant="h5" fontWeight="bold" letterSpacing={2} /> */}
        <span className="text-white text-2xl font-bold tracking-wide">Rajsan</span>
        {/* Tailwind: bg-blue-600 text-white text-xs px-2 py-1 rounded-full
            MUI: <Chip label="LIB" color="primary" size="small" /> */}
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">LIB</span>
      </div>
      {/* Tailwind: flex flex-col gap-2
          MUI: <List> with <ListItemButton> */}
      <nav className="flex flex-col gap-2">
        {navLinks.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            // Tailwind: px-4 py-2 rounded-lg transition-colors font-medium
            // MUI: <ListItemButton sx={{ px: 2, py: 1, borderRadius: 2, fontWeight: 500, transition: 'color 0.2s' }}>
            // Tailwind: bg-white text-blue-900 shadow (active)
            // MUI: selected + sx={{ backgroundColor: 'white', color: 'primary.main', boxShadow: 2 }}
            // Tailwind: text-blue-100 hover:bg-blue-800 hover:text-white (inactive)
            // MUI: sx={{ color: 'primary.light', '&:hover': { backgroundColor: 'primary.dark', color: 'white' } }}
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors font-medium
                ${isActive
                  ? "bg-white text-blue-900 shadow"
                  : "text-blue-100 hover:bg-blue-800 hover:text-white"}
              `}
            >
              {/* Tailwind: text-blue-900 (active) / text-blue-200 (inactive)
                  MUI: sx={{ color: isActive ? 'primary.main' : 'primary.light' }} */}
              <Icon size={20} className={isActive ? "text-blue-900" : "text-blue-200"} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="flex-grow" />
      {/* Tailwind: text-xs text-blue-200 text-center mt-8 opacity-70
          MUI: <Typography color="primary.light" variant="caption" align="center" sx={{ opacity: 0.7, mt: 8 }} /> */}
      <div className="text-xs text-blue-200 text-center mt-8 opacity-70">
        © 2025 Rajsan Library
      </div>
    </aside>
  );
}