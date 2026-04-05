import React from 'react';
import { Settings as SettingsIcon, Globe, Bell, Shield, Database, Palette, Smartphone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>
          <p className="text-gray-500">Configure school details, notifications, and system preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Sidebar */}
        <div className="md:col-span-1 space-y-2">
          {[
            { icon: Globe, label: 'Global Settings', active: true },
            { icon: Palette, label: 'Theme & Branding', active: false },
            { icon: Smartphone, label: 'SMS & WhatsApp', active: false },
            { icon: Bell, label: 'Notifications', active: false },
            { icon: Shield, label: 'Security & Roles', active: false },
            { icon: Database, label: 'Backup & Restore', active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                item.active ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-gray-600 hover:bg-gray-50"
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
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">School Profile</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">School Name</label>
                  <input type="text" defaultValue="ZK Digital School" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none" />
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
                  <textarea rows={2} defaultValue="Chak 39 GB, Satyana Banglow, Faisalabad" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">Regional Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Currency Sign</label>
                  <input type="text" defaultValue="Rs." className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date Format</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-xl">
                    <option>DD-MM-YYYY</option>
                    <option>MM-DD-YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
