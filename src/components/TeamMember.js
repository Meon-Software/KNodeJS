import React from 'react';

const TeamMember = ({ name, role, initials }) => (
  <div className="col-md-4 mb-4">
    <div className="card-glass h-100"> {/* Updated class */}
      <div className="card-body text-center p-4">
        <div className="mx-auto mb-3">
          <svg width="120" height="120">
            <circle cx="60" cy="60" r="55" fill="rgba(40, 40, 40, 0.5)" />
            <text 
              x="60" 
              y="75" 
              fontSize="50" 
              fill={role ? "#8cc84b" : "#6c757d"}
              fontWeight="bold"
              textAnchor="middle"
            >{initials}</text>
          </svg>
        </div>
        <h3 className="card-title">{name}</h3>
        <p className="text-node-green">{role}</p>
      </div>
    </div>
  </div>
);

export default TeamMember;
