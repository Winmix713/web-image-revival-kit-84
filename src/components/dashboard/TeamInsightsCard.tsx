
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const TeamInsightsCard = () => {
  const data = [
    { name: 'London Ágyúk', value: 24, color: '#ef4444' },
    { name: 'Liverpool', value: 22, color: '#f97316' },
    { name: 'Manchester Kék', value: 18, color: '#3b82f6' },
    { name: 'Vörös Ördögök', value: 16, color: '#8b5cf6' },
    { name: 'Egyéb', value: 20, color: '#64748b' }
  ];
  
  const COLORS = data.map(item => item.color);

  return (
    <Card className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 shadow-none h-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-white mb-4">Csapat elemzések</h3>
        
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value) => [`${value} pont`, null]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-xs text-gray-300 truncate">{item.name}</span>
              <span className="text-xs font-medium text-white ml-auto">{item.value}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-400">
            Az ábra a legtöbb pontot hozó csapatokat mutatja.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamInsightsCard;
