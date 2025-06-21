
import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { TEAM_MEMBERS } from '../constants';

const TeamPage: React.FC = () => {
  return (
    <div className="py-6">
      <h1 className="text-4xl font-bold text-node-text-primary mb-10 text-center">
        Nossa <span className="text-node-green">Equipe</span>
      </h1>
      <p className="text-center text-node-text-secondary mb-12 max-w-2xl mx-auto">
        Conheça os dedicados membros por trás do projeto KNodeJS, apaixonados por tecnologia e pela comunidade Node.js.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;