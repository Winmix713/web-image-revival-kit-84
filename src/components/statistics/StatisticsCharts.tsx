
import React, { useState } from 'react';
import { BarChart, LineChart, PieChart } from 'lucide-react';

const StatisticsCharts = () => {
  const [activeTab, setActiveTab] = useState('prediction');
  
  const tabs = [
    { id: 'prediction', label: 'Előrejelzési pontosság', icon: <LineChart className="h-4 w-4" /> },
    { id: 'distribution', label: 'Tipp eloszlás', icon: <PieChart className="h-4 w-4" /> },
    { id: 'performance', label: 'Teljesítmény', icon: <BarChart className="h-4 w-4" /> },
  ];

  return (
    <div className="animate-fade-in bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden" style={{animationDelay: '0.2s'}}>
      <div className="flex items-center gap-1 p-4 border-b border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition ${
              activeTab === tab.id
                ? 'bg-blue-500/20 text-blue-300'
                : 'text-gray-400 hover:bg-white/5'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="p-4">
        {activeTab === 'prediction' && (
          <div className="h-[350px] flex items-center justify-center">
            <div className="w-full max-w-3xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Előrejelzési pontosság</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-gray-400">Pontosság</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                    <span className="text-sm text-gray-400">Átlag</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex items-end">
                {/* Simulated bar chart for static HTML */}
                <div className="w-full flex items-end justify-between gap-2 h-[250px]">
                  {[65, 72, 58, 80, 90, 75, 82, 68, 77, 85, 73, 79].map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full relative">
                        {/* Average line */}
                        {index === 5 && (
                          <div className="absolute top-[25%] left-0 right-0 h-0.5 bg-purple-500/50 z-10"></div>
                        )}
                        <div 
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
                          style={{ height: `${value * 2.5}px` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">H{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'distribution' && (
          <div className="h-[350px] flex items-center justify-center">
            <div className="w-full max-w-md">
              <h3 className="text-lg font-medium text-white mb-6 text-center">Tipp eloszlás típus szerint</h3>
              
              {/* Simulated pie chart for static HTML */}
              <div className="relative h-64 w-64 mx-auto">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute top-0 right-0 bottom-0 left-1/2 bg-blue-500"></div>
                  <div className="absolute top-0 right-1/2 bottom-1/2 left-0 bg-emerald-500"></div>
                  <div className="absolute top-1/2 right-1/2 bottom-0 left-0 bg-amber-500"></div>
                </div>
                <div className="absolute inset-[15%] rounded-full bg-gray-900/90"></div>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="text-sm text-gray-400">Hazai (45%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                  <span className="text-sm text-gray-400">Vendég (30%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                  <span className="text-sm text-gray-400">Döntetlen (25%)</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'performance' && (
          <div className="h-[350px] flex items-center justify-center">
            <div className="w-full max-w-3xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Teljesítmény liga szerint</h3>
                <div className="text-sm text-gray-400">Pontosság (%)</div>
              </div>
              
              {/* Simulated horizontal bar chart for static HTML */}
              <div className="space-y-6">
                {[
                  { name: 'Premier League', value: 92 },
                  { name: 'La Liga', value: 85 },
                  { name: 'Bundesliga', value: 78 },
                  { name: 'Serie A', value: 76 },
                  { name: 'Ligue 1', value: 71 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">{item.name}</span>
                      <span className="text-sm font-semibold text-blue-400">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsCharts;
