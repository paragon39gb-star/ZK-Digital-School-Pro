import React, { useState, useEffect } from 'react';
import { FileText, PieChart as PieChartIcon, Users, Wallet, Calendar, BookOpen, ArrowLeft, Download, Printer, TrendingUp, BarChart3 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useSearchParams } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';

const feeData = [
  { name: 'Jan', amount: 45000 },
  { name: 'Feb', amount: 52000 },
  { name: 'Mar', amount: 48000 },
  { name: 'Apr', amount: 61000 },
  { name: 'May', amount: 55000 },
  { name: 'Jun', amount: 67000 },
];

const studentDistribution = [
  { name: 'Primary', value: 400 },
  { name: 'Middle', value: 300 },
  { name: 'High', value: 200 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

export default function Reports() {
  const [searchParams] = useSearchParams();
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setSelectedReport(type);
    }
  }, [searchParams]);

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

  if (selectedReport) {
    const renderReportContent = () => {
      switch (selectedReport) {
        case 'ID Cards':
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-full max-w-[350px] bg-white border-2 border-blue-600 rounded-2xl overflow-hidden shadow-md flex flex-col mx-auto print:shadow-none print:border-blue-600">
                  <div className="bg-blue-600 p-4 text-white text-center">
                    <h4 className="font-bold text-lg uppercase tracking-wider">Jamia Ululoom Multan</h4>
                    <p className="text-[10px] opacity-90">Student Identity Card 2026-27</p>
                  </div>
                  <div className="p-6 flex gap-4">
                    <div className="w-24 h-28 bg-gray-100 rounded-lg border-2 border-gray-200 flex-shrink-0 flex items-center justify-center">
                      <Users className="text-gray-300" size={40} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Name</p>
                        <p className="text-sm font-bold text-gray-800">Ahmed Khan {i}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Reg No</p>
                        <p className="text-sm font-mono font-bold text-blue-600">REG-2026-100{i}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Class</p>
                        <p className="text-sm font-bold text-gray-700">Grade 5 - Section A</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 border-t border-gray-100 flex justify-between items-center px-6">
                    <div className="text-[8px] text-gray-400">
                      <p>Valid until: March 2027</p>
                      <p>Emergency: +92 300 1234567</p>
                    </div>
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded p-1">
                      <div className="w-full h-full bg-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        case 'Admission Forms':
          return (
            <div className="space-y-8 max-w-4xl mx-auto bg-white p-12 border border-gray-100 shadow-sm print:shadow-none print:border-0">
              <div className="flex justify-between items-start border-b-2 border-blue-600 pb-6">
                <div className="space-y-1">
                  <h1 className="text-3xl font-black text-blue-600 uppercase tracking-tighter">Admission Form</h1>
                  <p className="text-gray-500 font-bold">Academic Session 2026-2027</p>
                </div>
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-center p-4">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Paste Student Photo Here</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="font-bold text-blue-600 border-b border-blue-100 pb-2 uppercase text-sm tracking-widest">Student Information</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Full Name</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Date of Birth</p>
                      <p className="text-sm font-bold text-gray-800">____ / ____ / ________</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Gender</p>
                      <p className="text-sm font-bold text-gray-800">[ ] Male  [ ] Female</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Religion</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-bold text-blue-600 border-b border-blue-100 pb-2 uppercase text-sm tracking-widest">Academic Information</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Admission Class</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Previous School</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Registration No</p>
                      <p className="text-sm font-mono font-bold text-blue-600">REG-2026-XXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-bold text-blue-600 border-b border-blue-100 pb-2 uppercase text-sm tracking-widest">Parent / Guardian Information</h3>
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Father's Name</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Occupation</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Mobile Number</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                    <div className="border-b border-gray-100 pb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">WhatsApp Number</p>
                      <p className="text-sm font-bold text-gray-800">________________________________</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 flex justify-between items-end">
                <div className="text-center space-y-2">
                  <div className="w-48 border-b border-gray-400" />
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Parent's Signature</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-48 border-b border-gray-400" />
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Principal's Signature</p>
                </div>
              </div>
            </div>
          );
        case 'Fee Invoices':
          return (
            <div className="space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm print:shadow-none print:border-gray-300 print:rounded-none mb-8">
                  <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                        <Wallet size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Fee Voucher</h3>
                        <p className="text-xs text-gray-500 font-mono">VOUCHER #2026-00{i}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-blue-600">April 2026</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Due Date: 10th April</p>
                    </div>
                  </div>
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span className="text-sm text-gray-500">Student Name</span>
                        <span className="text-sm font-bold text-gray-800">Ahmed Khan</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span className="text-sm text-gray-500">Registration No</span>
                        <span className="text-sm font-mono font-bold text-gray-800">REG-2026-1001</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span className="text-sm text-gray-500">Class</span>
                        <span className="text-sm font-bold text-gray-800">Grade 5</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tuition Fee</span>
                        <span className="font-bold">Rs. 4,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Exam Fee</span>
                        <span className="font-bold">Rs. 500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Late Fee Fine</span>
                        <span className="font-bold">Rs. 0</span>
                      </div>
                      <div className="pt-4 mt-4 border-t-2 border-blue-600 flex justify-between items-center">
                        <span className="text-lg font-black text-gray-800 uppercase">Total Amount</span>
                        <span className="text-2xl font-black text-blue-600 tracking-tighter">Rs. 4,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 text-center">
                    <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Please pay at any Bank Alfalah branch or via JazzCash/EasyPaisa</p>
                  </div>
                </div>
              ))}
            </div>
          );
        default:
          return (
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div className="text-center space-y-2 border-b border-gray-50 pb-8">
                <h1 className="text-3xl font-bold text-gray-800">{selectedReport}</h1>
                <p className="text-gray-500 italic">Academic Year 2026-2027 • Generated on {new Date().toLocaleDateString()}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700 flex items-center gap-2">
                    <TrendingUp size={18} className="text-blue-600" />
                    Monthly Trends
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={feeData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <Tooltip 
                          contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                        />
                        <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700 flex items-center gap-2">
                    <PieChartIcon size={18} className="text-purple-600" />
                    Category Distribution
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={studentDistribution}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {studentDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-700 flex items-center gap-2">
                  <BarChart3 size={18} className="text-orange-600" />
                  Detailed Data Summary
                </h3>
                <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Count</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Percentage</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {studentDistribution.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
                          <td className="px-6 py-4 text-gray-600">{item.value} Students</td>
                          <td className="px-6 py-4 text-gray-600">{((item.value / 900) * 100).toFixed(1)}%</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">Active</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center no-print">
          <button 
            onClick={() => setSelectedReport(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Reports
          </button>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
              <Download size={18} />
              Export PDF
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              <Printer size={18} />
              Print Report
            </button>
          </div>
        </div>

        {renderReportContent()}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center no-print">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports Center</h1>
          <p className="text-gray-500">Generate and print comprehensive school reports.</p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
          <PieChartIcon className="text-blue-600" size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 no-print">
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
                  onClick={() => setSelectedReport(item)}
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

      <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg shadow-blue-200 relative overflow-hidden no-print">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Custom Report Builder</h3>
          <p className="text-blue-100 mb-6 max-w-lg">Need a specific report? Use our custom builder to select fields and filters for your unique requirements.</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
            Open Report Builder
          </button>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <PieChartIcon size={160} />
        </div>
      </div>
    </div>
  );
}

