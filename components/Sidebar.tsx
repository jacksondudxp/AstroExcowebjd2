import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-brand-primary flex flex-col border-r border-slate-200">
      <div className="py-8 flex flex-col items-center text-center">
        <img src="https://ik.imagekit.io/xr12i05xn/astro%20logo.png?updatedAt=1751123974369" alt="AstroClub Logo" className="h-40 w-40 mb-4 bg-slate-800 rounded-full p-4" />
        <span className="text-xl font-bold text-brand-text">AstroClub Portal</span>
      </div>
      <nav className="flex-1 px-4 py-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 my-1 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-brand-accent/20 text-brand-accent shadow-md border border-brand-accent/50'
                  : 'text-brand-text-dark hover:bg-brand-secondary hover:text-brand-text'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? 'text-brand-accent' : 'text-brand-text-dark group-hover:text-brand-text'}>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200">
         {currentUser && (
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-brand-text">{currentUser.name}</p>
            <p className="text-xs text-brand-text-dark">{currentUser.role}</p>
          </div>
         )}
        <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-200 hover:bg-slate-300 text-brand-text-dark font-semibold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Logout
        </button>
        <div className="text-center mt-4 text-xs text-brand-text-dark">
            <span>© 2024 HKUST SU AstroClub</span>
            <Link to="/admin/accounts" className="ml-2 text-slate-400 hover:text-brand-accent">Admin Panel</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;