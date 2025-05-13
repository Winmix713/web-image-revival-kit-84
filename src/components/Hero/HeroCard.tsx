
import React from 'react';
import { Trophy, Award } from 'lucide-react';
import MatchPreview from './card/MatchPreview';
import ProbabilityBars from './card/ProbabilityBars';
import PredictionButtons from './card/PredictionButtons';

const HeroCard = () => {
  return (
    <div className="relative h-[425px] w-[425px] max-w-full">
      {/* Enhanced Glowing Background with 50% Blur */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 blur-[1.5px] animate-pulse-subtle opacity-70"></div>
      
      {/* Decorative Light Spot Effect */}
      <div className="absolute -top-[10%] -right-[10%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent blur-2xl animate-float opacity-50"></div>
      
      {/* Dynamic Radial Gradient Backdrop */}
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] opacity-50"></div>
      
      {/* Decorative rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 animate-float" style={{animationDuration: '15s'}}></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-blue-500/10 animate-float" style={{animationDuration: '20s', animationDelay: '0.5s'}}></div>
      
      {/* Content container with enhanced glassmorphism */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[380px] h-[420px] rounded-[2rem] overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-[0_30px_80px_rgba(59,130,246,0.2)]">
          <div className="h-full w-full p-8 flex flex-col">
            {/* Match header with status */}
            <div className="flex justify-between items-center mb-6">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-full px-3 py-1.5 border border-blue-400/20">
                <span className="text-xs font-medium text-blue-300">Élő mérkőzés</span>
              </div>
              <div className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-blue-400/10">21:00</div>
            </div>
            
            <MatchPreview />
            <ProbabilityBars />
            <PredictionButtons />
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-[20%] right-[5%] w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.3)] animate-float" style={{animationDuration: '4s'}}>
        <Trophy className="text-white h-5 w-5" />
      </div>
      <div className="absolute bottom-[15%] left-[10%] w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(139,92,246,0.3)] animate-float" style={{animationDuration: '5s', animationDelay: '1s'}}>
        <Award className="text-white h-4 w-4" />
      </div>
    </div>
  );
};

export default HeroCard;
