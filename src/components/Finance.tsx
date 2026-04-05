import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  FileText, 
  Search, 
  Filter, 
  Download,
  CreditCard,
  Banknote,
  Smartphone
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Finance() {
  const [activeTab, setActiveTab] = useState<'cash-in' | 'cash-out' | 'salaries'>('cash-in');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Finance Management</h1>
          <p className="text-gray-500">Manage fees, salaries, and school expenses.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
            <Plus size={18} />
            Collect Fee
          </button>
          <button className="flex-1 sm:flex-none bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Reports
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Total Income (Cash In)</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">Rs. 1,245,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <TrendingDown size={24} />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">-4.2%</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Total Expenses (Cash Out)</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">Rs. 842,000</p>
        </div>
        <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Wallet size={24} />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">Net Profit</span>
          </div>
          <p className="text-blue-100 text-sm font-medium">Current Balance</p>
          <p className="text-2xl font-bold mt-1">Rs. 403,000</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('cash-in')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'cash-in' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Cash In (Fees)
        </button>
        <button 
          onClick={() => setActiveTab('cash-out')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'cash-out' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Cash Out (Expenses)
        </button>
        <button 
          onClick={() => setActiveTab('salaries')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'salaries' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Pay Salaries
        </button>
      </div>

      {activeTab === 'cash-in' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search fee records..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-2 text-gray-600 hover:bg-gray-100">
                <Filter size={18} />
                Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Invoice ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Month</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Method</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: 'INV-1024', name: 'Ahmed Khan', month: 'April 2026', amount: 'Rs. 4,500', method: 'Cash', status: 'Paid' },
                  { id: 'INV-1025', name: 'Sara Ali', month: 'April 2026', amount: 'Rs. 3,800', method: 'JazzCash', status: 'Paid' },
                  { id: 'INV-1026', name: 'Zainab Bibi', month: 'April 2026', amount: 'Rs. 2,500', method: '-', status: 'Unpaid' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">{row.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.month}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">{row.amount}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        {row.method === 'Cash' && <Banknote size={14} />}
                        {row.method === 'JazzCash' && <Smartphone size={14} />}
                        {row.method}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-full uppercase",
                        row.status === 'Paid' ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      )}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline text-sm font-bold">View Voucher</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
