
import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import NextMatchCard from './NextMatchCard';
import TeamFormCard from './TeamFormCard';
import SeasonStatsCard from './SeasonStatsCard';
import RecentMatchesCard from './RecentMatchesCard';

interface TeamOverviewProps {
  teamId: string;
  teamName: string;
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ teamId, teamName }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <NextMatchCard teamId={teamId} teamName={teamName} />
        <TeamFormCard teamId={teamId} />
      </div>
      
      <SeasonStatsCard teamId={teamId} />
      
      <RecentMatchesCard teamId={teamId} teamName={teamName} />
    </>
  );
};

export default TeamOverview;
