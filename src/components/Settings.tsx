import React, { useState } from 'react';
import { Settings as SettingsIcon, Globe, Bell, Shield, Database, Palette, Smartphone } from 'lucide-react';
import { cn } from '../lib/utils';
import { useToast } from '../App';

export default function Settings() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('Global Settings');
  const [schoolName, setSchoolName] = useState('ZK Digital School');
  const [address, setAddress] = useState('Chak 39 GB, Satyana Banglow, Faisalabad');
  const [currency, setCurrency] = useState('Rs.');
  const [dateFormat, setDateFormat] = useState('DD-MM-YYYY');

  const handleSave = () => {
    showToast('Settings updated successfully!', 'success');
  };

  const tabs = [
    { icon: Globe, label: 'Global Settings' },
    { icon: Palette, label: 'Theme & Branding' },
    { icon: Smartphone, label: 'SMS & WhatsApp' },
    { icon: Bell, label: 'Notifications' },
    { icon: Shield, label: 'Security & Roles' },
    { icon: Database, label: 'Backup & Restore' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center no-print">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>
          <p className="text-gray-500">Configure school details, notifications, and system preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Sidebar */}
        <div className="md:col-span-1 space-y-2 no-print">
          {tabs.map((item, i) => (
            <button 
              key={i}
              onClick={() => setActiveTab(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                activeTab === item.label ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Form */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
            {activeTab === 'Global Settings' && (
              <>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">School Profile</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">School Name</label>
                      <input 
                        type="text" 
                        value={schoolName} 
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">School Logo</label>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                          <SettingsIcon size={24} />
                        </div>
                        <button className="text-sm text-blue-600 font-bold hover:underline">Change Logo</button>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-700">School Address</label>
                      <textarea 
                        rows={2} 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">Regional Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Currency Sign</label>
                      <input 
                        type="text" 
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Date Format</label>
                      <select 
                        value={dateFormat}
                        onChange={(e) => setDateFormat(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option>DD-MM-YYYY</option>
                        <option>MM-DD-YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Theme & Branding' && (
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">Visual Identity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-sm font-medium text-gray-700">Primary Color</label>
                      <div className="flex gap-3">
                        {['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                          <button 
                            key={color}
                            className={cn(
                              "w-10 h-10 rounded-full border-2 transition-all",
                              color === '#3b82f6' ? "border-blue-600 scale-110 shadow-lg" : "border-transparent hover:scale-105"
                            )}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-medium text-gray-700">Interface Style</label>
                      <div className="flex gap-4">
                        <button className="flex-1 p-4 border-2 border-blue-600 bg-blue-50 rounded-2xl text-center">
                          <p className="font-bold text-blue-600">Modern</p>
                          <p className="text-[10px] text-blue-400">Rounded & Soft</p>
                        </button>
                        <button className="flex-1 p-4 border-2 border-gray-100 rounded-2xl text-center hover:bg-gray-50">
                          <p className="font-bold text-gray-700">Classic</p>
                          <p className="text-[10px] text-gray-400">Sharp & Professional</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">Report Branding</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded-lg" />
                      <span className="text-sm font-medium text-gray-700">Show School Logo on Reports</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded-lg" />
                      <span className="text-sm font-medium text-gray-700">Show School Address in Footer</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Security & Roles' && (
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">User Roles & Permissions</h3>
                  <div className="space-y-4">
                    {[
                      { role: 'Administrator', desc: 'Full system access, manage settings and users.', users: 2 },
                      { role: 'Accountant', desc: 'Manage fees, expenses, and salary reports.', users: 1 },
                      { role: 'Teacher', desc: 'Manage attendance, results, and student info.', users: 12 },
                      { role: 'Receptionist', desc: 'Manage admissions and visitor logs.', users: 1 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-white rounded-xl text-blue-600 shadow-sm">
                            <Shield size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{item.role}</p>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-700">{item.users} Users</p>
                          <button className="text-xs text-blue-600 font-bold hover:underline">Edit Permissions</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">System Security</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded-lg" />
                      <span className="text-sm font-medium text-gray-700">Enable Two-Factor Authentication (2FA)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded-lg" />
                      <span className="text-sm font-medium text-gray-700">Force Password Change every 90 days</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'Global Settings' && activeTab !== 'Theme & Branding' && activeTab !== 'Security & Roles' && (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <SettingsIcon size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{activeTab}</h3>
                  <p className="text-gray-500">Settings for {activeTab} will be available soon.</p>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-4 no-print">
              <button 
                onClick={handleSave}
                className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

