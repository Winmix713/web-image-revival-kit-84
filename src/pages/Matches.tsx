
import React, { useState, useEffect } from 'react';
import { BarChart, Trophy, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PREMIER_LEAGUE_TEAMS } from '../data/premier-league-teams';
import MatchFilters from '../components/matches/MatchFilters';
import MatchesSummaryCard from '../components/matches/MatchesSummaryCard';
import MatchResultsCard from '../components/matches/MatchResultsCard';
import StatisticsCard from '../components/matches/StatisticsCard';
import MatchTableView from '../components/match/MatchTableView';
import PredictionResultCard from '../components/match/PredictionResultCard';
import { toast } from 'sonner';

// Generate random match data
const generateMatches = () => {
  const statuses = ['upcoming', 'live', 'completed'];
  const teams = PREMIER_LEAGUE_TEAMS;
  
  return Array.from({ length: 20 }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * 3)];
    const randomTeam1 = teams[Math.floor(Math.random() * teams.length)];
    let randomTeam2;
    
    // Ensure teams are different
    do {
      randomTeam2 = teams[Math.floor(Math.random() * teams.length)];
    } while (randomTeam1.id === randomTeam2.id);
    
    // Generate random date within 30 days past or future
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
      homeTeam: randomTeam1.name,
      awayTeam: randomTeam2.name,
      status,
      homeScore: status !== 'upcoming' ? homeScore : undefined,
      awayScore: status !== 'upcoming' ? awayScore : undefined,
      ft: status === 'completed' ? `${homeScore}-${awayScore}` : undefined,
      ht: status === 'completed' ? `${Math.min(homeScore || 0, 2)}-${Math.min(awayScore || 0, 2)}` : undefined,
    };
  });
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
    toast.success(`Szűrők frissítve`, {
      description: `Szűrés a következő szerint: ${
        filter === 'all' ? 'Összes mérkőzés' :
        filter === 'upcoming' ? 'Közelgő mérkőzések' :
        filter === 'live' ? 'Élő mérkőzések' : 'Befejezett mérkőzések'
      }`
    });
  };
  
  const handleMatchClick = (match: any) => {
    setSelectedMatch(match);
  };
  
  const filteredMatches = activeFilter === 'all' 
    ? matches 
    : matches.filter(match => match.status === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2.5 mb-3 bg-gradient-to-r from-blue-500/10 to-transparent px-4 py-2 rounded-full">
                <BarChart className="w-5 h-5 text-blue-400" />
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Mérkőzések
                </h1>
              </div>
              <p className="text-gray-400 max-w-lg">
                Tekintsd meg az összes közelgő és legutóbbi mérkőzést, elemezd az eredményeket és kövesd a statisztikákat.
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg">
              {/* If needed, additional match filters or settings could go here */}
              <span className="text-sm text-white flex items-center gap-1">
                Részletek
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column - 8/12 width */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatisticsCard 
                  title="Összes mérkőzés"
                  icon={<Trophy className="h-5 w-5 text-blue-400" />}
                  value="124"
                  change="8"
                  isPositive={true}
                />
                <StatisticsCard 
                  title="Sikeres tippek"
                  icon={<Trophy className="h-5 w-5 text-emerald-400" />}
                  value="76%"
                  change="2.5%"
                  isPositive={true}
                />
              </div>
              
              <MatchFilters 
                onFilterChange={handleFilterChange}
                activeFilter={activeFilter}
              />
              
              <MatchTableView 
                matches={filteredMatches}
                isLoading={isLoading}
                onMatchClick={handleMatchClick}
              />
            </div>
            
            {/* Right column - 4/12 width */}
            <div className="lg:col-span-4 space-y-8">
              <MatchesSummaryCard />
              <MatchResultsCard />
              
              {selectedMatch && (
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5 animate-fade-in">
                  <h3 className="text-lg font-semibold text-white mb-4">Kiválasztott mérkőzés</h3>
                  <PredictionResultCard 
                    match={{
                      home: PREMIER_LEAGUE_TEAMS.find(t => t.name === selectedMatch.homeTeam) || null,
                      away: PREMIER_LEAGUE_TEAMS.find(t => t.name === selectedMatch.awayTeam) || null,
                      status: selectedMatch.status,
                      time: selectedMatch.time,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Matches;
