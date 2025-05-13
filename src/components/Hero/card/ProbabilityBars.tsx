
import React from 'react';

const ProbabilityBars = () => {
  return (
    <div className="mt-auto">
      <div className="mb-4">
        <div className="text-xs text-gray-400 mb-2">Tipp esélyek</div>
        <div className="flex gap-1 items-center">
          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{width: '42%'}}></div>
          </div>
          <span className="text-xs text-blue-400 min-w-[30px] text-right">42%</span>
        </div>
        <div className="flex gap-1 items-center mt-1.5">
          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gray-500 rounded-full" style={{width: '28%'}}></div>
          </div>
          <span className="text-xs text-gray-400 min-w-[30px] text-right">28%</span>
        </div>
        <div className="flex gap-1 items-center mt-1.5">
          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{width: '30%'}}></div>
          </div>
          <span className="text-xs text-blue-400 min-w-[30px] text-right">30%</span>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityBars;
