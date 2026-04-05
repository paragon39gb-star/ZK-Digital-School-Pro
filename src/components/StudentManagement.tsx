import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Download, MoreHorizontal, UserPlus, List } from 'lucide-react';
import { cn } from '../lib/utils';

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const studentsData = [
    { 
      id: '1', 
      regNo: 'REG-2026-1001', 
      name: 'Ahmed Khan', 
      class: 'Grade 5', 
      gender: 'Male',
      religion: 'Muslim',
      dob: '2015-05-12',
      pob: 'Multan',
      address: 'Gulgasht Colony, Multan',
      lastSchool: 'City Public School',
      siblings: 'REG-2026-1005',
      category: 'Merit Scholarship',
      fatherName: 'Muhammad Khan', 
      motherName: 'Sajida Bibi',
      fatherOcc: 'Business',
      motherOcc: 'Housewife',
      mobile: '+92 300 1234561', 
      whatsapp: '+92 300 1234561',
      applicant: 'Father',
      admType: 'New',
      regDate: '2026-04-01',
      submitDate: '2026-04-01',
      admFee: '5000',
      status: 'Active' 
    },
    { 
      id: '2', 
      regNo: 'REG-2026-1002', 
      name: 'Sara Ali', 
      class: 'Grade 3', 
      gender: 'Female',
      religion: 'Muslim',
      dob: '2017-08-20',
      pob: 'Lahore',
      address: 'Model Town, Lahore',
      lastSchool: 'Beaconhouse',
      siblings: 'None',
      category: 'Staff Child',
      fatherName: 'Ali Ahmed', 
      motherName: 'Noreen Ali',
      fatherOcc: 'Teacher',
      motherOcc: 'Teacher',
      mobile: '+92 300 1234562', 
      whatsapp: '+92 300 1234562',
      applicant: 'Mother',
      admType: 'Transfer',
      regDate: '2026-04-02',
      submitDate: '2026-04-02',
      admFee: '4500',
      status: 'Active' 
    },
  ];

  const filteredStudents = studentsData.filter(student => {
    const searchLower = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(searchLower) ||
      student.regNo.toLowerCase().includes(searchLower) ||
      student.class.toLowerCase().includes(searchLower) ||
      student.fatherName.toLowerCase().includes(searchLower) ||
      student.mobile.toLowerCase().includes(searchLower) ||
      student.category.toLowerCase().includes(searchLower) ||
      student.religion.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Students List</h2>
          <p className="text-sm text-gray-500">Comprehensive view of all registered students.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Link 
            to="add" 
            className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm"
          >
            <UserPlus size={18} />
            Add Student
          </Link>
          <button className="flex-1 sm:flex-none bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, reg no, class, father name, category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50/50">
              <tr className="text-left">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Reg No</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Religion</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{student.regNo}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                        <p className="text-sm font-bold text-gray-700">{student.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{student.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{student.gender}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{student.religion}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    No students found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AddStudent = () => {
  const navigate = useNavigate();
  const [regNo] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `REG-${year}-${random}`;
  });
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">New Admission</h2>
        <button 
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-blue-600 font-medium"
        >
          Back to List
        </button>
      </div>

      <form className="space-y-8">
        {/* Student Details */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            <h3 className="font-bold text-gray-800">Student Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Registration No (Auto)</label>
              <input type="text" disabled value={regNo} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Student Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Student Photo</label>
              <input type="file" accept="image/*" className="w-full px-4 py-1.5 border border-gray-200 rounded-xl text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Class</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none">
                <option>Select Class</option>
                <option>Pre KG</option>
                <option>KG</option>
                <option>Nursery</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
                <option>Six</option>
                <option>Seven</option>
                <option>Eight</option>
                <option>Nine</option>
                <option>Ten</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" className="text-blue-600" />
                  <span className="text-sm">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" className="text-blue-600" />
                  <span className="text-sm">Female</span>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Religion</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-xl">
                <option>Muslim</option>
                <option>Christian</option>
                <option>Hindu</option>
                <option>Qadiani</option>
                <option>Ahmadi</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Place of Birth</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Siblings in School (ID/Reg No)</label>
              <input type="text" placeholder="Enter Sibling ID" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Last Attended School</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <textarea rows={1} className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Parent Details */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <div className="w-1 h-6 bg-purple-600 rounded-full" />
            <h3 className="font-bold text-gray-800">Parents/Guardian Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Father Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Mother Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Student Category</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-xl">
                <option>Merit Scholarship</option>
                <option>Orphan</option>
                <option>Sibling Discount</option>
                <option>Retired Armed Forces</option>
                <option>Special Needs</option>
                <option>Staff Child</option>
                <option>Teacher Child</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Father Occupation</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Mother Occupation</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Mobile No</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">WhatsApp No</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Applicant Relation</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-xl">
                <option>Father</option>
                <option>Mother</option>
                <option>Guardian</option>
                <option>Uncle</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Ant</option>
                <option>Grandfather</option>
                <option>Grandmother</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Admission Details */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <div className="w-1 h-6 bg-orange-600 rounded-full" />
            <h3 className="font-bold text-gray-800">Admission Info</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Admission Type</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-xl">
                <option>New</option>
                <option>Transfer</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Admission Fee (PKR)</label>
              <input type="number" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Registration Date</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Form Submit Date</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
            </div>
            <div className="space-y-2 flex items-end pb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-sm font-medium text-gray-700">Print Admission Form</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button type="button" className="px-6 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
          <button type="submit" className="px-8 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Save Student</button>
        </div>
      </form>
    </div>
  );
};

export default function StudentManagement() {
  return (
    <Routes>
      <Route index element={<StudentList />} />
      <Route path="add" element={<AddStudent />} />
    </Routes>
  );
}
