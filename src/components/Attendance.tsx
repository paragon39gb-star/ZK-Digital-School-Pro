import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Check, 
  X, 
  Clock, 
  Search, 
  Scan, 
  Fingerprint, 
  Edit3, 
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

const students = [
  { id: '1', name: 'Ahmed Khan', regNo: 'REG-001', class: 'Grade 5' },
  { id: '2', name: 'Sara Ali', regNo: 'REG-002', class: 'Grade 3' },
  { id: '3', name: 'Zainab Bibi', regNo: 'REG-003', class: 'KG' },
  { id: '4', name: 'Umar Farooq', regNo: 'REG-004', class: 'Grade 1' },
  { id: '5', name: 'Fatima Zahra', regNo: 'REG-005', class: 'Grade 4' },
];

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceMode, setAttendanceMode] = useState<'Manual' | 'Barcode' | 'Biometric'>('Manual');
  const [records, setRecords] = useState<Record<string, string>>({});

  const toggleStatus = (id: string, status: string) => {
    setRecords(prev => ({
      ...prev,
      [id]: prev[id] === status ? '' : status
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Daily Attendance</h1>
          <p className="text-gray-500">Mark or edit student attendance for today.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
          <button 
            onClick={() => setAttendanceMode('Manual')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all",
              attendanceMode === 'Manual' ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <Edit3 size={16} />
            Manual
          </button>
          <button 
            onClick={() => setAttendanceMode('Barcode')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all",
              attendanceMode === 'Barcode' ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <Scan size={16} />
            Barcode
          </button>
          <button 
            onClick={() => setAttendanceMode('Biometric')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all",
              attendanceMode === 'Biometric' ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <Fingerprint size={16} />
            Biometric
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <CalendarIcon size={18} className="text-blue-600" />
              Select Date
            </h3>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
              <button className="p-1 hover:bg-white rounded-lg transition-colors"><ChevronLeft size={16} /></button>
              <span className="text-sm font-medium">{format(selectedDate, 'MMM dd, yyyy')}</span>
              <button className="p-1 hover:bg-white rounded-lg transition-colors"><ChevronRight size={16} /></button>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-50">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Class</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>All Classes</option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Section</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>Section A</option>
                  <option>Section B</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
            <h4 className="font-bold mb-2">Bulk Actions</h4>
            <p className="text-blue-100 text-xs mb-4">Mark all students as present for the selected class.</p>
            <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-bold transition-colors">
              Mark All Present
            </button>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search student..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-left">
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Reg No</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{student.name}</p>
                            <p className="text-xs text-gray-500">{student.class}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-mono">{student.regNo}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => toggleStatus(student.id, 'P')}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all border",
                              records[student.id] === 'P' 
                                ? "bg-green-500 border-green-500 text-white shadow-lg shadow-green-200" 
                                : "bg-white border-gray-200 text-gray-400 hover:border-green-500 hover:text-green-500"
                            )}
                            title="Present"
                          >
                            <Check size={20} />
                          </button>
                          <button 
                            onClick={() => toggleStatus(student.id, 'A')}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all border",
                              records[student.id] === 'A' 
                                ? "bg-red-500 border-red-500 text-white shadow-lg shadow-red-200" 
                                : "bg-white border-gray-200 text-gray-400 hover:border-red-500 hover:text-red-500"
                            )}
                            title="Absent"
                          >
                            <X size={20} />
                          </button>
                          <button 
                            onClick={() => toggleStatus(student.id, 'L')}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all border",
                              records[student.id] === 'L' 
                                ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-200" 
                                : "bg-white border-gray-200 text-gray-400 hover:border-orange-500 hover:text-orange-500"
                            )}
                            title="Leave"
                          >
                            <Clock size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end">
              <button className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Save Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
