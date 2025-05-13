
import React from 'react';
import { Team } from '../../data/premier-league-teams';
import PredictionResultCard from '../match/PredictionResultCard';

interface PredictionResultsSectionProps {
  selectedTeams: { home: Team | null; away: Team | null }[];
}

const PredictionResultsSection: React.FC<PredictionResultsSectionProps> = ({ selectedTeams }) => {
  const validMatches = selectedTeams.filter(match => match.home && match.away);
  
  if (validMatches.length === 0) return null;

  return (
    <div className="mt-16 animate-fade-in" style={{animationDelay: "0.7s"}}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Predikciók eredménye
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent mx-8"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {validMatches
          .slice(0, 4)
          .map((match, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <PredictionResultCard match={match} />
            </div>
          ))}
      </div>
      
      {validMatches.length > 4 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {validMatches
            .slice(4)
            .map((match, index) => (
              <div key={index + 4} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <PredictionResultCard key={index + 4} match={match} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PredictionResultsSection;
