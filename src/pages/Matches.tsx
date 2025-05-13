
import React, { useState, useEffect } from 'react';
import { Calendar, FilterX, TableProperties } from 'lucide-react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import StatsCard from "@/components/common/StatsCard";
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

// Simplistic match data generator for demo
const generateMatches = () => {
  const statuses = ['upcoming', 'live', 'completed'];
  const teams = [
    'Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 
    'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 
    'Fulham', 'Liverpool', 'Man City', 'Man United',
    'Newcastle', 'Nottm Forest', 'Sheffield Utd', 'Tottenham',
    'West Ham', 'Wolves'
  ];
  
  return Array.from({ length: 20 }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * 3)];
    const homeTeam = teams[Math.floor(Math.random() * teams.length)];
    let awayTeam;
    
    do {
      awayTeam = teams[Math.floor(Math.random() * teams.length)];
    } while (homeTeam === awayTeam);
    
    const date = new Date();
    date.setDate(date.getDate() + (Math.random() * 60 - 30));
    
    let homeScore, awayScore;
    
    if (status !== 'upcoming') {
      homeScore = Math.floor(Math.random() * 5);
      awayScore = Math.floor(Math.random() * 5);
    }
    
    return {
      id: i + 1,
      date: date.toISOString().split('T')[0],
      time: `${String(Math.floor(Math.random() * 12) + 12).padStart(2, '0')}:00`,
      homeTeam,
      awayTeam,
      status,
      homeScore: status !== 'upcoming' ? homeScore : undefined,
      awayScore: status !== 'upcoming' ? awayScore : undefined,
      ft: status === 'completed' ? `${homeScore}-${awayScore}` : undefined,
      ht: status === 'completed' ? `${Math.min(homeScore || 0, 2)}-${Math.min(awayScore || 0, 2)}` : undefined,
    };
  });
};

const MatchStatusBadge = ({ status }: { status: string }) => {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
        <span className="w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
        Live
      </span>
    );
  }
  
  if (status === 'upcoming') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
        Upcoming
      </span>
    );
  }
  
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
      Completed
    </span>
  );
};

const Matches = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [matches, setMatches] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      setMatches(generateMatches());
      setIsLoading(false);
    }, 800);
  }, []);
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    toast.success(`Filters updated`, {
      description: `Filtering by ${
        filter === 'all' ? 'All matches' :
        filter === 'upcoming' ? 'Upcoming matches' :
        filter === 'live' ? 'Live matches' : 'Completed matches'
      }`
    });
  };
  
  const filteredMatches = activeFilter === 'all' 
    ? matches 
    : matches.filter(match => match.status === activeFilter);

  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader 
        title="Matches"
        description="View all upcoming and recent matches, analyze results and track statistics"
        icon={Calendar}
        variant="gradient"
        actions={
          <div className="flex items-center gap-2">
            <Input 
              className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30 w-[200px]"
              placeholder="Search matches..."
            />
            <Button variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10">
              <FilterX className="h-4 w-4" />
              Filters
            </Button>
          </div>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Matches"
          value="124"
          icon={TableProperties}
          color="blue"
          delay={0}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard 
          title="Live Matches"
          value="3"
          icon={TableProperties}
          color="red"
          delay={100}
          trend={{ value: 1, isPositive: true }}
        />
        <StatsCard 
          title="Successful Predictions"
          value="76%"
          icon={TableProperties}
          color="green"
          delay={200}
          trend={{ value: 2.5, isPositive: true }}
        />
      </div>
      
      <ContentCard className="mb-8" variant="glass" animationDelay={150}>
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Button 
            variant={activeFilter === 'all' ? "default" : "outline"}
            className={activeFilter === 'all' ? "bg-[#3a36e0]" : "bg-white/5 border-white/10"}
            onClick={() => handleFilterChange('all')}
          >
            All Matches
          </Button>
          <Button 
            variant={activeFilter === 'upcoming' ? "default" : "outline"}
            className={activeFilter === 'upcoming' ? "bg-[#3a36e0]" : "bg-white/5 border-white/10"}
            onClick={() => handleFilterChange('upcoming')}
          >
            Upcoming
          </Button>
          <Button 
            variant={activeFilter === 'live' ? "default" : "outline"}
            className={activeFilter === 'live' ? "bg-[#3a36e0] relative" : "bg-white/5 border-white/10"}
            onClick={() => handleFilterChange('live')}
          >
            Live
            {matches.filter(match => match.status === 'live').length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#ff4a4a] opacity-75"></span>
                <span className="rounded-full h-3 w-3 bg-[#ff4a4a]"></span>
              </span>
            )}
          </Button>
          <Button 
            variant={activeFilter === 'completed' ? "default" : "outline"}
            className={activeFilter === 'completed' ? "bg-[#3a36e0]" : "bg-white/5 border-white/10"}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Date/Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Home Team</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-white">Score</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Away Team</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-white">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="animate-pulse">
                    <td className="px-4 py-4"><div className="h-4 w-20 bg-white/10 rounded"></div></td>
                    <td className="px-4 py-4"><div className="h-4 w-24 bg-white/10 rounded"></div></td>
                    <td className="px-4 py-4 text-center"><div className="h-4 w-12 bg-white/10 rounded mx-auto"></div></td>
                    <td className="px-4 py-4"><div className="h-4 w-24 bg-white/10 rounded"></div></td>
                    <td className="px-4 py-4 text-center"><div className="h-4 w-16 bg-white/10 rounded mx-auto"></div></td>
                  </tr>
                ))
              ) : filteredMatches.length > 0 ? (
                filteredMatches.map((match) => (
                  <tr 
                    key={match.id} 
                    className="hover:bg-white/5 cursor-pointer transition-colors"
                    onClick={() => setSelectedMatch(match)}
                  >
                    <td className="px-4 py-4 text-sm text-gray-300">
                      <div>{new Date(match.date).toLocaleDateString()}</div>
                      <div className="text-xs text-gray-400">{match.time}</div>
                    </td>
                    <td className="px-4 py-4 font-medium text-white">{match.homeTeam}</td>
                    <td className="px-4 py-4 text-center">
                      {match.status !== 'upcoming' ? (
                        <span className="font-bold text-white">
                          {match.homeScore} - {match.awayScore}
                        </span>
                      ) : (
                        <span className="text-gray-400">vs</span>
                      )}
                    </td>
                    <td className="px-4 py-4 font-medium text-white">{match.awayTeam}</td>
                    <td className="px-4 py-4 text-center">
                      <MatchStatusBadge status={match.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                    No matches found for the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {!isLoading && filteredMatches.length > 0 && (
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5">
            <div className="text-sm text-gray-400">
              Showing {filteredMatches.length} of {matches.length} matches
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-white/5 border-white/10">Previous</Button>
              <Button variant="outline" size="sm" className="bg-white/5 border-white/10">Next</Button>
            </div>
          </div>
        )}
      </ContentCard>
      
      {selectedMatch && (
        <ContentCard className="mb-8" variant="glass" animationDelay={250}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Match Details</h2>
            <Button variant="outline" size="sm" className="bg-white/5 border-white/10" onClick={() => setSelectedMatch(null)}>
              Close
            </Button>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right flex-1">
              <div className="text-lg font-bold text-white">{selectedMatch.homeTeam}</div>
              <div className="text-sm text-gray-400">Home Team</div>
            </div>
            
            <div className="text-center px-6 py-4 rounded-lg bg-white/5 min-w-[140px]">
              {selectedMatch.status !== 'upcoming' ? (
                <>
                  <div className="text-3xl font-bold text-white">{selectedMatch.homeScore} - {selectedMatch.awayScore}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {selectedMatch.status === 'completed' ? 'Final Score' : 'Current Score'}
                  </div>
                  {selectedMatch.status === 'completed' && selectedMatch.ht && (
                    <div className="text-xs text-gray-400 mt-1">HT: {selectedMatch.ht}</div>
                  )}
                </>
              ) : (
                <>
                  <div className="text-xl font-bold text-white">vs</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(selectedMatch.date).toLocaleDateString()} • {selectedMatch.time}
                  </div>
                </>
              )}
              <MatchStatusBadge status={selectedMatch.status} />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="text-lg font-bold text-white">{selectedMatch.awayTeam}</div>
              <div className="text-sm text-gray-400">Away Team</div>
            </div>
          </div>
          
          <Separator className="my-6 bg-white/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold text-white mb-3">Match Statistics</h3>
              <div className="space-y-3">
                {['Possession', 'Shots', 'Shots on Target', 'Corners', 'Fouls'].map(stat => (
                  <div key={stat} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{stat}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-white">
                        {Math.floor(Math.random() * 10) + 1}
                      </span>
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#3a36e0] to-[#9b87f5]"
                          style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {Math.floor(Math.random() * 10) + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-semibold text-white mb-3">Key Events</h3>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 p-2 rounded">
                    <div className="text-center min-w-[40px]">
                      <div className="text-sm font-medium text-white">
                        {Math.floor(Math.random() * 45) + (index > 1 ? 45 : 0)}'
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      index % 3 === 0 ? "bg-green-400" : index % 3 === 1 ? "bg-yellow-400" : "bg-red-400"
                    }`}></div>
                    <div className="text-sm text-gray-200">
                      {index % 3 === 0 ? "Goal" : index % 3 === 1 ? "Yellow Card" : "Red Card"}
                      <span className="text-gray-400 ml-1">- Player Name</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>
      )}
    </AppLayout>
  );
};

export default Matches;
