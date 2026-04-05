import React from 'react';
import { FileText, PieChart, Users, Wallet, Calendar, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Reports() {
  const reportCategories = [
    {
      title: 'Student Fee Reports',
      icon: Wallet,
      color: 'text-green-600',
      bg: 'bg-green-50',
      items: ['Fee Invoices', 'Fee Voucher (Family Based)', 'Daily Fee Collection', 'Billing Summary', 'Deleted History']
    },
    {
      title: 'Student Info Reports',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      items: ['Students List', 'Attendance Summary', 'ID Cards', 'Admission Forms', 'Leaving Certificate']
    },
    {
      title: 'Employee Reports',
      icon: Calendar,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      items: ['Employee List', 'Salary Slips', 'Payment Summary', 'Attendance Details', 'Experience Letters']
    },
    {
      title: 'Academic Reports',
      icon: BookOpen,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      items: ['Class Lists', 'Time Tables', 'Exam Results', 'Date Sheets', 'Question Papers']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports Center</h1>
          <p className="text-gray-500">Generate and print comprehensive school reports.</p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
          <PieChart className="text-blue-600" size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportCategories.map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className={cn("p-3 rounded-xl", cat.bg, cat.color)}>
                <cat.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{cat.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.items.map((item, idx) => (
                <button 
                  key={idx}
                  className="flex items-center gap-2 p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all text-left border border-transparent hover:border-blue-100"
                >
                  <FileText size={16} className="shrink-0" />
                  <span className="truncate">{item}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg shadow-blue-200 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Custom Report Builder</h3>
          <p className="text-blue-100 mb-6 max-w-lg">Need a specific report? Use our custom builder to select fields and filters for your unique requirements.</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
            Open Report Builder
          </button>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <PieChart size={160} />
        </div>
      </div>
    </div>
  );
}
