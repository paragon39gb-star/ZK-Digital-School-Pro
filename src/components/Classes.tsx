import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit, 
  Layers, 
  BookOpen, 
  FileSpreadsheet,
  ArrowUpCircle,
  Move
} from 'lucide-react';
import { cn } from '../lib/utils';

const classesData = [
  { id: '1', name: 'Pre KG', no: '1st', level: 'Primary', subjects: ['English', 'Math', 'GK'] },
  { id: '2', name: 'KG', no: '2nd', level: 'Primary', subjects: ['English', 'Math', 'GK', 'Urdu'] },
  { id: '3', name: 'Nursery', no: '3rd', level: 'Primary', subjects: ['English', 'Math', 'Urdu'] },
  { id: '4', name: 'One', no: '4th', level: 'Primary', subjects: ['English', 'Math', 'Science', 'Urdu', 'Islamiat'] },
];

export default function Classes() {
  const [activeTab, setActiveTab] = useState<'list' | 'levels' | 'promotion'>('list');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Class Management</h1>
          <p className="text-gray-500">Configure classes, levels, and student promotions.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
            <Plus size={18} />
            Add Class
          </button>
          <button className="flex-1 sm:flex-none bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <FileSpreadsheet size={18} />
            Import Excel
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('list')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'list' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Classes List
        </button>
        <button 
          onClick={() => setActiveTab('levels')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'levels' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Manage Levels
        </button>
        <button 
          onClick={() => setActiveTab('promotion')}
          className={cn(
            "px-6 py-3 text-sm font-bold transition-all border-b-2",
            activeTab === 'promotion' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Student Promotion
        </button>
      </div>

      {activeTab === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesData.map((cls) => (
            <div key={cls.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Layers size={24} />
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-blue-600"><Edit size={16} /></button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-red-600"><Trash2 size={16} /></button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{cls.name}</h3>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">{cls.no} Class</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">{cls.level}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Subjects</p>
                <div className="flex flex-wrap gap-1">
                  {cls.subjects.map((sub, i) => (
                    <span key={i} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded border border-gray-100">{sub}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'promotion' && (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
            <ArrowUpCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Bulk Promotion</h3>
          <p className="text-gray-500 max-w-md mx-auto">Promote students from one class to another at the end of the academic year.</p>
          <div className="flex justify-center gap-4 pt-4">
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none">
              <option>From Class</option>
              <option>Pre KG</option>
              <option>KG</option>
            </select>
            <Move className="text-gray-300 self-center" />
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none">
              <option>To Class</option>
              <option>KG</option>
              <option>Nursery</option>
            </select>
          </div>
          <button className="mt-6 px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Start Promotion Process
          </button>
        </div>
      )}
    </div>
  );
}
