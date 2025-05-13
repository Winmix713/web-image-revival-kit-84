
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PredictionPerformanceChart = () => {
  const [timeRange, setTimeRange] = React.useState('weekly');

  const weeklyData = [
    { name: 'H', accuracy: 72, points: 120 },
    { name: 'K', accuracy: 68, points: 110 },
    { name: 'Sze', accuracy: 78, points: 140 },
    { name: 'Cs', accuracy: 76, points: 135 },
    { name: 'P', accuracy: 82, points: 150 },
    { name: 'Szo', accuracy: 84, points: 160 },
    { name: 'V', accuracy: 80, points: 145 },
  ];

  const monthlyData = [
    { name: '1.h', accuracy: 70, points: 120 },
    { name: '2.h', accuracy: 75, points: 135 },
    { name: '3.h', accuracy: 78, points: 150 },
    { name: '4.h', accuracy: 76, points: 140 },
  ];

  const chartData = timeRange === 'weekly' ? weeklyData : monthlyData;

  return (
    <Card className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 shadow-none h-full animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-white">Predikciós teljesítmény</h3>
          <Tabs defaultValue="weekly" value={timeRange} onValueChange={setTimeRange}>
            <TabsList className="bg-black/20">
              <TabsTrigger value="weekly" className="data-[state=active]:bg-blue-500/20">Heti</TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-blue-500/20">Havi</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} 
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#888' }}
              />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#4ade80" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#111', stroke: '#4ade80', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
                fillOpacity={1}
                fill="url(#colorAccuracy)"
              />
              <Line 
                type="monotone" 
                dataKey="points" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#111', stroke: '#3b82f6', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
                fillOpacity={1}
                fill="url(#colorPoints)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-5">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
            <span className="text-sm text-gray-300">Pontosság</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-300">Pontszám</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionPerformanceChart;
