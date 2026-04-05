import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Book, 
  UserCog, 
  Wallet, 
  LogOut, 
  Settings, 
  FileText, 
  HelpCircle,
  Menu,
  X,
  Home,
  ChevronRight,
  School
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// Components (to be created)
import Dashboard from './components/Dashboard';
import StudentManagement from './components/StudentManagement';
import Attendance from './components/Attendance';
import Classes from './components/Classes';
import Academic from './components/Academic';
import Examination from './components/Examination';
import Finance from './components/Finance';
import UserManagement from './components/UserManagement';
import SettingsPage from './components/Settings';
import Reports from './components/Reports';
import Help from './components/Help';
import ErrorBoundary from './components/ErrorBoundary';

const SidebarItem = ({ icon: Icon, label, to, active, onClick }: any) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
      active 
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    )}
  >
    <Icon size={20} className={cn(active ? "text-white" : "text-gray-400 group-hover:text-blue-600")} />
    <span className="font-medium">{label}</span>
  </Link>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Users, label: 'Students', to: '/students' },
    { icon: UserCheck, label: 'Attendance', to: '/attendance' },
    { icon: BookOpen, label: 'Classes', to: '/classes' },
    { icon: GraduationCap, label: 'Academic', to: '/academic' },
    { icon: FileText, label: 'Examination', to: '/exams' },
    { icon: Wallet, label: 'Finance', to: '/finance' },
    { icon: UserCog, label: 'Users', to: '/users' },
    { icon: FileText, label: 'Reports', to: '/reports' },
    { icon: Settings, label: 'Settings', to: '/settings' },
    { icon: HelpCircle, label: 'Help', to: '/help' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-50",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3 border-b border-gray-100">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <School size={24} />
          </div>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl text-gray-800 truncate"
            >
              ZK Digital
            </motion.div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.to}
              {...item}
              active={location.pathname === item.to}
              isCollapsed={!isSidebarOpen}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Home size={16} />
              <ChevronRight size={14} />
              <span className="capitalize">{location.pathname.split('/')[1] || 'Dashboard'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
              AD
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students/*" element={<StudentManagement />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/exams" element={<Examination />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<div className="p-8 text-center text-gray-500">Feature coming soon...</div>} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}
