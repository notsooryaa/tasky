import { Header } from "../components/ui/Header";
import { useLocation } from "@tanstack/react-router";
import type { headerPages } from "../utils/HeaderHelper";
import {
    FileText,
    History,
    Calendar,
    Plus,
    Download,
    Settings,
    Clock,
    ChevronRight,
    Search,
    Filter,
    Share2,
    Trash2,
    Star
} from 'lucide-react';

const reportTemplates = [
    {
        title: 'Weekly Performance',
        description: 'Comprehensive overview of team productivity and task completion rates.',
        icon: FileText,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        title: 'Project Timeline',
        description: 'Detailed analysis of project milestones, delays, and projected completion.',
        icon: History,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
    },
    {
        title: 'Resource Allocation',
        description: 'Insight into team workload distribution and capacity planning.',
        icon: Star,
        color: 'text-amber-600',
        bg: 'bg-amber-50',
    },
];

const sharedReports = [
    { id: 1, name: 'Jan 2024 Performance', type: 'Weekly', date: 'Jan 31, 2024', status: 'Generated', size: '2.4 MB' },
    { id: 2, name: 'Q4 Review', type: 'Quarterly', date: 'Jan 15, 2024', status: 'Archived', size: '5.1 MB' },
    { id: 3, name: 'Team Velocity', type: 'Performance', date: 'Feb 10, 2024', status: 'Generated', size: '1.2 MB' },
];

function Report() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <Header page={path as keyof typeof headerPages} />
            <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] h-full p-6 rounded-tl-2xl pt-25">
                {/* Header */}
                <div className="flex flex-row md:items-center justify-between w-full p-2 mb-2">
                    <div>
                        <h1 className="text-4xl font-medium text-gray-900">Reports</h1>
                        <p className="text-gray-500 mt-1">Generate, manage, and schedule your business reports</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                            <Settings className="w-4 h-4" />
                            Settings
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm group">
                            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                            Create New Report
                        </button>
                    </div>
                </div>

                {/* Quick Actions / Templates */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {reportTemplates.map((template, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                            <div className={`w-12 h-12 rounded-xl ${template.bg} flex items-center justify-center mb-4`}>
                                <template.icon className={`w-6 h-6 ${template.color}`} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{template.title}</h3>
                            <p className="text-sm text-slate-500 mb-4">{template.description}</p>
                            <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
                                Use Template <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Report List */}
                    <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <h3 className="text-lg font-bold text-slate-900">Recent Reports</h3>
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search reports..."
                                        className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                    />
                                </div>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg">
                                <Filter className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {sharedReports.map((report) => (
                                        <tr key={report.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors">
                                                        <FileText className="w-4 h-4 text-slate-600 group-hover:text-indigo-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900">{report.name}</p>
                                                        <p className="text-xs text-slate-500">{report.type} • {report.size}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{report.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${report.status === 'Generated' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {report.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                                                        <Download className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                                                        <Share2 className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-slate-50/30 text-center">
                            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All Reports</button>
                        </div>
                    </div>

                    {/* Automation / Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-linear-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl text-white shadow-lg shadow-indigo-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white/20 rounded-xl">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-bold">Scheduled Reports</h3>
                            </div>
                            <p className="text-indigo-50 text-sm mb-6">Automate your reporting workflow and get insights directly in your inbox.</p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-2xl border border-white/10">
                                    <Clock className="w-4 h-4 text-indigo-200" />
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-white">Daily Standup</p>
                                        <p className="text-[10px] text-indigo-200">Sent every day at 8:00 AM</p>
                                    </div>
                                    <div className="w-8 h-4 bg-indigo-400/50 rounded-full relative cursor-pointer">
                                        <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-2xl border border-white/10">
                                    <History className="w-4 h-4 text-indigo-200" />
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-white">Monthly Review</p>
                                        <p className="text-[10px] text-indigo-200">Next: March 1, 2024</p>
                                    </div>
                                    <div className="w-8 h-4 bg-white/20 rounded-full relative cursor-pointer">
                                        <div className="w-3 h-3 bg-white/50 rounded-full absolute left-0.5 top-0.5"></div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-2.5 bg-white text-indigo-600 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors shadow-md">
                                Schedule New
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">Export Preferences</h3>
                            <div className="space-y-3">
                                {['PDF Document', 'CSV Spreadsheet', 'Excel Workbook', 'PowerPoint Presentation'].map((type) => (
                                    <label key={type} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer group">
                                        <span className="text-sm text-slate-600">{type}</span>
                                        <div className="w-4 h-4 border-2 border-slate-200 rounded-full group-hover:border-indigo-400 transition-colors"></div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Report;
