import React from 'react';
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Bell
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Help() {
  const contactDetails = {
    manager: 'Hafiz Khalid Mahmood',
    mobiles: ['+92 310 6465624', '+92 302 9544387'],
    whatsapp: '+92 370 9227626',
    email: 'hafizkhalidofficial@gmail.com',
    address: 'Chak 39 GB, Satyana Banglow, Faisalabad'
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
          <p className="text-gray-500">Get assistance and contact ZK Digital Hub support.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Mobile Numbers</p>
                    {contactDetails.mobiles.map((m, i) => (
                      <p key={i} className="text-gray-800 font-medium">{m}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">WhatsApp</p>
                    <p className="text-gray-800 font-medium">{contactDetails.whatsapp}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Email Address</p>
                    <p className="text-gray-800 font-medium">{contactDetails.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Office Address</p>
                    <p className="text-gray-800 font-medium text-sm leading-relaxed">{contactDetails.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-50 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </button>
              <button className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all">
                <ExternalLink size={18} />
                Visit Website
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <RefreshCw size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Check for Updates</h4>
                <p className="text-xs text-gray-500">Current Version: v2.4.0</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">System Activation</h4>
                <p className="text-xs text-gray-500">Status: Licensed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Bell size={18} className="text-blue-600" />
              Notifications
            </h3>
            <div className="space-y-4">
              {[
                { title: 'New Update Available', time: '2 days ago', type: 'update' },
                { title: 'Backup Successful', time: '5 hours ago', type: 'system' },
                { title: 'License Renewal', time: '1 month ago', type: 'billing' },
              ].map((notif, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-sm font-medium text-gray-800">{notif.title}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{notif.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
