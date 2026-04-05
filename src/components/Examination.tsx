import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Award, 
  Printer, 
  Search, 
  Filter, 
  Plus, 
  X, 
  CheckCircle2, 
  Trophy,
  BookOpen,
  Calendar,
  Users
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const examsData = [
  { id: 'e1', name: 'Monthly Test', date: 'April 2026', status: 'In Progress', color: 'bg-blue-500' },
  { id: 'e2', name: '1st Term Exam', date: 'June 2026', status: 'Upcoming', color: 'bg-purple-500' },
  { id: 'e3', name: '2nd Term Exam', date: 'Sept 2026', status: 'Scheduled', color: 'bg-orange-500' },
  { id: 'e4', name: 'Annual Exam', date: 'March 2027', status: 'Planned', color: 'bg-green-500' },
];

const resultsData = [
  { id: 'r1', name: 'Ahmed Khan', regNo: 'REG-2026-1001', total: 500, obtained: 465, perc: '93%', grade: 'A+', pos: '1st' },
  { id: 'r2', name: 'Sara Ali', regNo: 'REG-2026-1002', total: 500, obtained: 442, perc: '88%', grade: 'A', pos: '2nd' },
  { id: 'r3', name: 'Zainab Bibi', regNo: 'REG-2026-1003', total: 500, obtained: 410, perc: '82%', grade: 'A', pos: '3rd' },
  { id: 'r4', name: 'Umar Farooq', regNo: 'REG-2026-1004', total: 500, obtained: 380, perc: '76%', grade: 'B', pos: '4th' },
];

export default function Examination() {
  const [activeTab, setActiveTab] = useState<'exams' | 'marks' | 'results'>('exams');
  const [isAddExamOpen, setIsAddExamOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');

  const filteredResults = useMemo(() => {
    return resultsData.filter(r => 
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      r.regNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Examination</h1>
          <p className="text-gray-500">Manage exams, marks, and generate result cards.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <Printer size={18} />
            Bulk Result Print
          </button>
          <button 
            onClick={() => setIsAddExamOpen(true)}
            className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Plus size={18} />
            Add New Exam
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('exams')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'exams' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Exams List
        </button>
        <button 
          onClick={() => setActiveTab('marks')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'marks' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Enter Marks
        </button>
        <button 
          onClick={() => setActiveTab('results')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'results' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Student Results
        </button>
      </div>

      {activeTab === 'exams' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examsData.map((exam) => (
            <div key={exam.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4", exam.color)}>
                <Award size={24} />
              </div>
              <h3 className="font-bold text-gray-800">{exam.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{exam.date}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{exam.status}</span>
                <button className="text-blue-600 text-sm font-bold hover:underline">Manage</button>
              </div>
            </div>
          ))}
          <button 
            onClick={() => setIsAddExamOpen(true)}
            className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-all"
          >
            <Plus size={32} />
            <span className="font-bold">New Exam</span>
          </button>
        </div>
      )}

      {activeTab === 'marks' && (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Select Exam</label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>Monthly Test - April 2026</option>
                <option>1st Term Exam - June 2026</option>
              </select>
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Select Class</label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
              </select>
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Select Subject</label>
              <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>English</option>
                <option>Math</option>
                <option>Science</option>
              </select>
            </div>
            <button className="self-end px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Load Students
            </button>
          </div>
          
          <div className="p-12 text-center border-2 border-dashed border-gray-100 rounded-3xl">
            <BookOpen size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">Select exam, class, and subject to start entering marks.</p>
          </div>
        </div>
      )}

      {activeTab === 'results' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search student results..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none"
              >
                <option>All Classes</option>
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
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Reg No</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Obtained</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Perc</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Grade</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Position</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredResults.length > 0 ? (
                  filteredResults.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                            {row.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-gray-800">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 font-mono">{row.regNo}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.total}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-800">{row.obtained}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.perc}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-1 rounded-full uppercase",
                          row.grade === 'A+' ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                        )}>
                          {row.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1 text-sm font-bold text-blue-600">
                          {row.pos === '1st' && <Trophy size={14} className="text-yellow-500" />}
                          {row.pos}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg text-sm font-bold transition-colors">
                          Print Card
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-10 text-center text-gray-500">
                      No results found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Exam Modal */}
      {isAddExamOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-600 text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Plus size={24} />
                Add New Examination
              </h2>
              <button onClick={() => setIsAddExamOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <FileText size={16} className="text-blue-600" />
                  Exam Name
                </label>
                <input type="text" placeholder="e.g., 1st Term Examination" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    Start Date
                  </label>
                  <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    End Date
                  </label>
                  <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Users size={16} className="text-blue-600" />
                  Applicable Classes
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Pre KG', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].map(cls => (
                    <label key={cls} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                      <span className="text-xs text-gray-600">{cls}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
              <button onClick={() => setIsAddExamOpen(false)} className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
                Create Exam
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
