
import React from 'react';
import { BarChart, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface PerformanceChartProps {
  teamId: string;
  teamName: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ teamId, teamName }) => {
  // Mock performance data - in a real app, this would come from an API
  const performanceData = [
    { month: 'Jan', points: 7, goalDiff: 3, position: 5 },
    { month: 'Feb', points: 9, goalDiff: 5, position: 4 },
    { month: 'Mar', points: 4, goalDiff: -2, position: 6 },
    { month: 'Apr', points: 10, goalDiff: 7, position: 3 },
    { month: 'May', points: 12, goalDiff: 8, position: 2 },
    { month: 'Jun', points: 7, goalDiff: 1, position: 4 },
    { month: 'Jul', points: 6, goalDiff: 0, position: 5 },
    { month: 'Aug', points: 8, goalDiff: 2, position: 4 },
    { month: 'Sep', points: 12, goalDiff: 9, position: 1 },
    { month: 'Oct', points: 6, goalDiff: -1, position: 3 },
    { month: 'Nov', points: 9, goalDiff: 4, position: 3 },
    { month: 'Dec', points: 8, goalDiff: 2, position: 4 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900/90 border border-white/10 rounded-lg p-3 shadow-xl">
          <p className="text-sm font-medium text-white mb-1">{label}</p>
          <p className="text-xs text-blue-400">
            Pontok: <span className="font-semibold">{payload[0].value}</span>
          </p>
          <p className="text-xs text-green-400">
            Gólkülönbség: <span className="font-semibold">{payload[1].value}</span>
          </p>
          <p className="text-xs text-purple-400">
            Helyezés: <span className="font-semibold">{payload[2].value}.</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-blue-400" />
          </div>
          <h2 className="text-lg font-bold text-white">{teamName} szezonális teljesítmény</h2>
        </div>
        <div className="flex items-center gap-2">
          <select className="bg-white/5 border border-white/10 text-white rounded-md h-8 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30">
            <option value="2023">2023/2024</option>
            <option value="2022">2022/2023</option>
            <option value="2021">2021/2022</option>
          </select>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={performanceData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} 
            />
            <YAxis 
              yAxisId="left" 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} 
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} 
              domain={[1, 'dataMax']} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="points" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="goalDiff" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ fill: '#10B981', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="position" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-xs text-gray-400">Pontok</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-400">Gólkülönbség</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-purple-500"></div>
          <span className="text-xs text-gray-400">Helyezés</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
