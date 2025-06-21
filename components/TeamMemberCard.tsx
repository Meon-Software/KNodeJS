
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-node-content-bg shadow-lg rounded-lg p-6 text-center flex flex-col items-center border border-gray-700 hover:border-node-green transition-all duration-300 transform hover:scale-105">
      <div className="mb-4 text-node-green">
        {React.cloneElement(member.icon, { className: "w-20 h-20 text-node-green" })}
      </div>
      <h3 className="text-xl font-semibold text-node-text-primary mb-1">{member.name}</h3>
      <p className="text-node-text-secondary text-sm">{member.role}</p>
    </div>
  );
};

export default TeamMemberCard;