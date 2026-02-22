import { Header } from "../components/ui/Header";
import { useLocation } from "@tanstack/react-router";
import type { headerPages } from "../utils/HeaderHelper";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';
import {
    TrendingUp,
    CheckCircle2,
    Clock,
    AlertCircle,
    Calendar,
    Filter
} from 'lucide-react';

const data = [
    { name: 'Mon', tasks: 12, completed: 8 },
    { name: 'Tue', tasks: 19, completed: 15 },
    { name: 'Wed', tasks: 15, completed: 12 },
    { name: 'Thu', tasks: 22, completed: 18 },
    { name: 'Fri', tasks: 30, completed: 25 },
    { name: 'Sat', tasks: 10, completed: 5 },
    { name: 'Sun', tasks: 8, completed: 7 },
];

const stats = [
    { label: 'Total Tasks', value: '116', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Completed', value: '90', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pending', value: '26', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Critical', value: '4', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
];

function Analytics() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <Header page={path as keyof typeof headerPages} />
            <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] h-full p-6 rounded-tl-2xl pt-25">
                <div className="flex flex-row md:items-center justify-between w-full p-2 mb-2">

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                            <Calendar className="w-4 h-4" />
                            Last 7 Days
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm">
                            <Filter className="w-4 h-4" />
                            Filter Data
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-slate-900">Task Activity</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                                    <span className="text-xs font-medium text-slate-500">Created</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span className="text-xs font-medium text-slate-500">Completed</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            borderRadius: '12px',
                                            border: 'none',
                                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="tasks"
                                        stroke="#6366f1"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorTasks)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="completed"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorCompleted)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-slate-900">Efficiency</h3>
                            <Filter className="w-5 h-5 text-slate-400" />
                        </div>

                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        contentStyle={{
                                            borderRadius: '12px',
                                            border: 'none',
                                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                        }}
                                    />
                                    <Bar dataKey="completed" radius={[6, 6, 0, 0]}>
                                        {data.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#818cf8'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-50">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-slate-500">Weekly Target</span>
                                <span className="text-sm font-bold text-slate-900">85%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Analytics;
