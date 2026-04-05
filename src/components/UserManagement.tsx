import React, { useState } from 'react';
import { 
  UserCog, 
  Shield, 
  UserPlus, 
  Search, 
  MoreVertical, 
  Key, 
  X, 
  CheckCircle2, 
  Lock,
  Eye,
  Edit3,
  Trash2,
  UserCheck,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useToast } from '../App';

const usersData = [
  { id: '1', name: 'Hafiz Khalid', username: 'admin', role: 'Administrator', status: 'Active', phone: '+92 310 6465624', email: 'admin@school.com' },
  { id: '2', name: 'Ahmed Ali', username: 'principal', role: 'Principal', status: 'Active', phone: '+92 300 1234567', email: 'principal@school.com' },
  { id: '3', name: 'Sara Khan', username: 'accountant', role: 'Accountant', status: 'Active', phone: '+92 300 7654321', email: 'finance@school.com' },
  { id: '4', name: 'Zainab Bibi', username: 'teacher1', role: 'Teacher', status: 'Active', phone: '+92 300 1122334', email: 'zainab@school.com' },
];

const rolesData = [
  { id: 'r1', name: 'Administrator', usersCount: 1, permissions: ['All Access'] },
  { id: 'r2', name: 'Principal', usersCount: 1, permissions: ['Students', 'Attendance', 'Exams', 'Reports'] },
  { id: 'r3', name: 'Teacher', usersCount: 12, permissions: ['Attendance', 'Exams (Marks Entry)'] },
  { id: 'r4', name: 'Accountant', usersCount: 2, permissions: ['Finance', 'Reports'] },
];

export default function UserManagement() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'users' | 'roles'>('users');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('System user created successfully!');
    setIsAddUserOpen(false);
  };

  const filteredUsers = usersData.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <p className="text-gray-500">Manage system users, roles, and permissions.</p>
        </div>
        <button 
          onClick={() => setIsAddUserOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm"
        >
          <UserPlus size={18} />
          Add New User
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('users')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'users' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Users List
        </button>
        <button 
          onClick={() => setActiveTab('roles')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'roles' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Roles & Permissions
        </button>
      </div>

      {activeTab === 'users' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search users by name or username..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">User Info</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border-2 border-white shadow-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{user.username}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Shield size={14} className="text-blue-500" />
                        <span className="text-sm text-gray-600">{user.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-blue-50 rounded-lg text-gray-400 hover:text-blue-600" title="Reset Password">
                          <Key size={16} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'roles' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rolesData.map((role) => (
            <div key={role.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex justify-between items-center">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Shield size={24} />
                </div>
                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{role.usersCount} Users</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{role.name}</h3>
                <div className="mt-2 space-y-1">
                  {role.permissions.map((perm, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-green-500" />
                      {perm}
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                <Lock size={14} />
                Edit Permissions
              </button>
            </div>
          ))}
          <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-all">
            <Plus size={32} />
            <span className="font-bold">Create New Role</span>
          </button>
        </div>
      )}

      {/* Add User Modal */}
      {isAddUserOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-600 text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <UserPlus size={24} />
                Add New System User
              </h2>
              <button onClick={() => setIsAddUserOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddUser}>
              <div className="p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Username</label>
                  <input type="text" placeholder="johndoe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Role</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>Teacher</option>
                    <option>Accountant</option>
                    <option>Principal</option>
                    <option>Administrator</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+92 300 0000000" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Initial Password</label>
                <div className="relative">
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
              <button type="button" onClick={() => setIsAddUserOpen(false)} className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
                Create User
              </button>
            </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
