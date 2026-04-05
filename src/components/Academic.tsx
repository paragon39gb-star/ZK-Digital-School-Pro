import React from 'react';
import { Clock, Book, Printer, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Academic() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Academic Management</h1>
          <p className="text-gray-500">Manage timetables, periods, and subjects.</p>
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors no-print"
        >
          <Printer size={18} />
          Print Timetable
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Periods</p>
            <p className="text-xl font-bold text-gray-800">8 Periods/Day</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Book size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Subjects</p>
            <p className="text-xl font-bold text-gray-800">12 Subjects</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Academic Year</p>
            <p className="text-xl font-bold text-gray-800">2026-2027</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-bold text-gray-800">Weekly Timetable</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 border border-gray-100 text-xs font-bold text-gray-500 uppercase">Time / Day</th>
                <th className="p-4 border border-gray-100 text-xs font-bold text-gray-500 uppercase">Monday</th>
                <th className="p-4 border border-gray-100 text-xs font-bold text-gray-500 uppercase">Tuesday</th>
                <th className="p-4 border border-gray-100 text-xs font-bold text-gray-500 uppercase">Wednesday</th>
                <th className="p-4 border border-gray-100 text-xs font-bold text-gray-500 uppercase">Thursday</th>
                <th className="p-4 border border-gray-100 text-xs font-bold text-gray-500 uppercase">Friday</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '08:00 - 08:40', mon: 'English', tue: 'Math', wed: 'Science', thu: 'Urdu', fri: 'Islamiat' },
                { time: '08:40 - 09:20', mon: 'Math', tue: 'Science', wed: 'English', thu: 'Islamiat', fri: 'Urdu' },
                { time: '09:20 - 10:00', mon: 'Science', tue: 'English', wed: 'Math', thu: 'GK', fri: 'Computer' },
                { time: '10:00 - 10:30', mon: 'BREAK', tue: 'BREAK', wed: 'BREAK', thu: 'BREAK', fri: 'BREAK' },
                { time: '10:30 - 11:10', mon: 'Urdu', tue: 'Islamiat', wed: 'GK', thu: 'Math', fri: 'Science' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="p-4 border border-gray-100 text-sm font-bold text-gray-600 bg-gray-50">{row.time}</td>
                  <td className={cn("p-4 border border-gray-100 text-sm", row.mon === 'BREAK' ? "bg-gray-100 text-center font-bold text-gray-400" : "text-gray-700")}>{row.mon}</td>
                  <td className={cn("p-4 border border-gray-100 text-sm", row.tue === 'BREAK' ? "bg-gray-100 text-center font-bold text-gray-400" : "text-gray-700")}>{row.tue}</td>
                  <td className={cn("p-4 border border-gray-100 text-sm", row.wed === 'BREAK' ? "bg-gray-100 text-center font-bold text-gray-400" : "text-gray-700")}>{row.wed}</td>
                  <td className={cn("p-4 border border-gray-100 text-sm", row.thu === 'BREAK' ? "bg-gray-100 text-center font-bold text-gray-400" : "text-gray-700")}>{row.thu}</td>
                  <td className={cn("p-4 border border-gray-100 text-sm", row.fri === 'BREAK' ? "bg-gray-100 text-center font-bold text-gray-400" : "text-gray-700")}>{row.fri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
