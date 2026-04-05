import React from 'react';
import { FileText, Award, Printer, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Examination() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Examination</h1>
          <p className="text-gray-500">Manage exams, marks, and generate result cards.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Printer size={18} />
            Bulk Result Print
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <FileText size={18} />
            Add New Exam
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { name: 'Monthly Test', date: 'April 2026', status: 'In Progress', color: 'bg-blue-500' },
          { name: '1st Term Exam', date: 'June 2026', status: 'Upcoming', color: 'bg-purple-500' },
          { name: '2nd Term Exam', date: 'Sept 2026', status: 'Scheduled', color: 'bg-orange-500' },
          { name: 'Annual Exam', date: 'March 2027', status: 'Planned', color: 'bg-green-500' },
        ].map((exam, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4", exam.color)}>
              <Award size={24} />
            </div>
            <h3 className="font-bold text-gray-800">{exam.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{exam.date}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase">{exam.status}</span>
              <button className="text-blue-600 text-sm font-bold hover:underline">Manage</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search student results..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none">
              <option>Select Class</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
            </select>
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
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Student</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Total Marks</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Obtained</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Percentage</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Position</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Ahmed Khan', total: 500, obtained: 465, perc: '93%', grade: 'A+', pos: '1st' },
                { name: 'Sara Ali', total: 500, obtained: 442, perc: '88%', grade: 'A', pos: '2nd' },
                { name: 'Zainab Bibi', total: 500, obtained: 410, perc: '82%', grade: 'A', pos: '3rd' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.total}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.obtained}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.perc}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full">{row.grade}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-600">{row.pos}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-bold">Print Card</button>
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
