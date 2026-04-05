import React, { useState, useMemo } from 'react';
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
  Smartphone,
  X,
  Calendar,
  User,
  Hash
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const feeRecords = [
  { id: 'INV-1024', name: 'Ahmed Khan', regNo: 'REG-2026-1001', month: 'April 2026', amount: 4500, method: 'Cash', status: 'Paid', date: '2026-04-01' },
  { id: 'INV-1025', name: 'Sara Ali', regNo: 'REG-2026-1002', month: 'April 2026', amount: 3800, method: 'JazzCash', status: 'Paid', date: '2026-04-02' },
  { id: 'INV-1026', name: 'Zainab Bibi', regNo: 'REG-2026-1003', month: 'April 2026', amount: 2500, method: '-', status: 'Unpaid', date: '-' },
  { id: 'INV-1027', name: 'Umar Farooq', regNo: 'REG-2026-1004', month: 'April 2026', amount: 4200, method: 'EasyPaisa', status: 'Paid', date: '2026-04-03' },
];

const expenseRecords = [
  { id: 'EXP-501', category: 'Utilities', description: 'Electricity Bill - March', amount: 15000, date: '2026-04-05', status: 'Paid' },
  { id: 'EXP-502', category: 'Maintenance', description: 'Classroom Painting', amount: 25000, date: '2026-04-02', status: 'Paid' },
  { id: 'EXP-503', category: 'Stationery', description: 'Exam Papers Printing', amount: 8500, date: '2026-04-04', status: 'Pending' },
];

const salaryRecords = [
  { id: 'SAL-001', name: 'Muhammad Ali', designation: 'Principal', baseSalary: 85000, bonus: 5000, status: 'Paid', month: 'March 2026' },
  { id: 'SAL-002', name: 'Ayesha Siddiqa', designation: 'Senior Teacher', baseSalary: 45000, bonus: 0, status: 'Paid', month: 'March 2026' },
  { id: 'SAL-003', name: 'Usman Ghani', designation: 'Accountant', baseSalary: 35000, bonus: 2000, status: 'Pending', month: 'March 2026' },
];

export default function Finance() {
  const [activeTab, setActiveTab] = useState<'cash-in' | 'cash-out' | 'salaries'>('cash-in');
  const [isCollectFeeOpen, setIsCollectFeeOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (activeTab === 'cash-in') {
      return feeRecords.filter(r => r.name.toLowerCase().includes(term) || r.id.toLowerCase().includes(term) || r.regNo.toLowerCase().includes(term));
    } else if (activeTab === 'cash-out') {
      return expenseRecords.filter(r => r.category.toLowerCase().includes(term) || r.description.toLowerCase().includes(term) || r.id.toLowerCase().includes(term));
    } else {
      return salaryRecords.filter(r => r.name.toLowerCase().includes(term) || r.designation.toLowerCase().includes(term) || r.id.toLowerCase().includes(term));
    }
  }, [activeTab, searchTerm]);

  const totals = useMemo(() => {
    const income = feeRecords.filter(r => r.status === 'Paid').reduce((acc, r) => acc + r.amount, 0);
    const expenses = expenseRecords.filter(r => r.status === 'Paid').reduce((acc, r) => acc + r.amount, 0);
    const salaries = salaryRecords.filter(r => r.status === 'Paid').reduce((acc, r) => acc + (r.baseSalary + r.bonus), 0);
    return { income, expenses: expenses + salaries, balance: income - (expenses + salaries) };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Finance Management</h1>
          <p className="text-gray-500">Manage fees, salaries, and school expenses.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={() => setIsCollectFeeOpen(true)}
            className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm"
          >
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
          <p className="text-2xl font-bold text-gray-800 mt-1">Rs. {totals.income.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <TrendingDown size={24} />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">-4.2%</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Total Expenses (Cash Out)</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">Rs. {totals.expenses.toLocaleString()}</p>
        </div>
        <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Wallet size={24} />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">Net Profit</span>
          </div>
          <p className="text-blue-100 text-sm font-medium">Current Balance</p>
          <p className="text-2xl font-bold mt-1">Rs. {totals.balance.toLocaleString()}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => { setActiveTab('cash-in'); setSearchTerm(''); }}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'cash-in' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Cash In (Fees)
        </button>
        <button 
          onClick={() => { setActiveTab('cash-out'); setSearchTerm(''); }}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'cash-out' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Cash Out (Expenses)
        </button>
        <button 
          onClick={() => { setActiveTab('salaries'); setSearchTerm(''); }}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'salaries' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Pay Salaries
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={`Search ${activeTab === 'cash-in' ? 'fee records' : activeTab === 'cash-out' ? 'expenses' : 'salaries'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              {activeTab === 'cash-in' && (
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Invoice ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Reg No</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              )}
              {activeTab === 'cash-out' && (
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Exp ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              )}
              {activeTab === 'salaries' && (
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Staff ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Base Salary</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Bonus</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              )}
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((row: any, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    {activeTab === 'cash-in' && (
                      <>
                        <td className="px-6 py-4 text-sm font-bold text-blue-600">{row.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 font-mono">{row.regNo}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.month}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Rs. {row.amount.toLocaleString()}</td>
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
                      </>
                    )}
                    {activeTab === 'cash-out' && (
                      <>
                        <td className="px-6 py-4 text-sm font-bold text-red-600">{row.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.description}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Rs. {row.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{row.date}</td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "text-[10px] font-bold px-2 py-1 rounded-full uppercase",
                            row.status === 'Paid' ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                          )}>
                            {row.status}
                          </span>
                        </td>
                      </>
                    )}
                    {activeTab === 'salaries' && (
                      <>
                        <td className="px-6 py-4 text-sm font-bold text-gray-600">{row.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.designation}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Rs. {row.baseSalary.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-green-600 font-medium">+Rs. {row.bonus.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{row.month}</td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "text-[10px] font-bold px-2 py-1 rounded-full uppercase",
                            row.status === 'Paid' ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                          )}>
                            {row.status}
                          </span>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                    No records found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Collect Fee Modal */}
      {isCollectFeeOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-600 text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Plus size={24} />
                Collect Student Fee
              </h2>
              <button onClick={() => setIsCollectFeeOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <User size={16} className="text-blue-600" />
                    Student Name
                  </label>
                  <input type="text" placeholder="Enter student name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Hash size={16} className="text-blue-600" />
                    Registration No
                  </label>
                  <input type="text" placeholder="REG-2026-XXXX" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    Fee Month
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>April 2026</option>
                    <option>May 2026</option>
                    <option>June 2026</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Wallet size={16} className="text-blue-600" />
                    Amount (Rs.)
                  </label>
                  <input type="number" placeholder="0.00" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <CreditCard size={16} className="text-blue-600" />
                    Payment Method
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>Cash</option>
                    <option>JazzCash</option>
                    <option>EasyPaisa</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FileText size={16} className="text-blue-600" />
                    Payment Date
                  </label>
                  <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Remarks / Note</label>
                <textarea rows={3} placeholder="Any additional information..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"></textarea>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
              <button onClick={() => setIsCollectFeeOpen(false)} className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
                Record Payment
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
