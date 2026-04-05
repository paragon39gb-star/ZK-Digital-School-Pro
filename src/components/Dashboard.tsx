import React from 'react';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Wallet, 
  TrendingUp, 
  TrendingDown,
  Calendar as CalendarIcon,
  Plus,
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock,
  Trophy
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Total Students', value: '1,284', icon: Users, color: 'bg-blue-500', trend: '+12%' },
  { label: 'Present Today', value: '1,156', icon: UserCheck, color: 'bg-green-500', trend: '90%' },
  { label: 'Total Teachers', value: '48', icon: GraduationCap, color: 'bg-purple-500', trend: 'Active' },
  { label: 'Monthly Revenue', value: 'Rs. 450,000', icon: Wallet, color: 'bg-orange-500', trend: '+8%' },
];

const attendanceData = [
  { name: 'Mon', present: 1100, absent: 184 },
  { name: 'Tue', present: 1150, absent: 134 },
  { name: 'Wed', present: 1080, absent: 204 },
  { name: 'Thu', present: 1200, absent: 84 },
  { name: 'Fri', present: 1180, absent: 104 },
];

const revenueData = [
  { month: 'Jan', amount: 380000 },
  { month: 'Feb', amount: 420000 },
  { month: 'Mar', amount: 450000 },
  { month: 'Apr', amount: 410000 },
  { month: 'May', amount: 480000 },
];

const quickActions = [
  { label: 'Add Student', icon: Plus, to: '/students/add', color: 'bg-blue-600' },
  { label: 'Collect Fee', icon: Wallet, to: '/finance?action=collect-fee', color: 'bg-green-600' },
  { label: 'Attendance', icon: UserCheck, to: '/attendance', color: 'bg-purple-600' },
  { label: 'New Exam', icon: GraduationCap, to: '/exams?action=new-exam', color: 'bg-orange-600' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
          <p className="text-gray-500">Here's what's happening at ZK Digital School today.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <CalendarIcon size={16} />
            Today: April 5, 2026
          </button>
          <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 hover:text-blue-600 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, idx) => (
          <Link 
            key={idx} 
            to={action.to}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className={cn("p-3 rounded-xl text-white transition-transform group-hover:scale-110", action.color)}>
              <action.icon size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-800">{action.label}</p>
              <p className="text-[10px] text-gray-400 flex items-center gap-1">
                Quick Access <ArrowRight size={10} />
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-xl text-white", stat.color)}>
                <stat.icon size={24} />
              </div>
              <span className={cn(
                "text-xs font-bold px-2 py-1 rounded-full",
                stat.trend.startsWith('+') ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
              )}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Attendance Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="present" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="absent" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue Collection</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Admissions</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-4 font-semibold text-gray-600 text-sm">Reg No</th>
                  <th className="pb-4 font-semibold text-gray-600 text-sm">Student Name</th>
                  <th className="pb-4 font-semibold text-gray-600 text-sm">Class</th>
                  <th className="pb-4 font-semibold text-gray-600 text-sm">Date</th>
                  <th className="pb-4 font-semibold text-gray-600 text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { reg: 'REG-001', name: 'Ahmed Khan', class: 'Grade 5', date: '2026-04-01', status: 'New' },
                  { reg: 'REG-002', name: 'Sara Ali', class: 'Grade 3', date: '2026-04-02', status: 'Transfer' },
                  { reg: 'REG-003', name: 'Zainab Bibi', class: 'KG', date: '2026-04-03', status: 'New' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-sm font-medium text-blue-600">{row.reg}</td>
                    <td className="py-4 text-sm text-gray-800">{row.name}</td>
                    <td className="py-4 text-sm text-gray-600">{row.class}</td>
                    <td className="py-4 text-sm text-gray-500">{row.date}</td>
                    <td className="py-4">
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full font-medium",
                        row.status === 'New' ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                      )}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {[
              { title: 'Monthly Test', date: 'April 10', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Parent Teacher Meeting', date: 'April 15', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Sports Day', date: 'April 22', icon: Trophy, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Eid Holidays', date: 'April 28', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className={cn("p-2 rounded-lg", event.bg, event.color)}>
                  <event.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
            View School Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
