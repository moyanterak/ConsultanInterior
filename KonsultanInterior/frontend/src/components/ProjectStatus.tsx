import React from 'react';

const ProjectStatus: React.FC<{ status: any[] }> = ({ status }) => {
  return (
    <div>
      <h2>Status Proyek</h2>
      {status.length === 0 ? <p>Belum ada proyek</p> : (
        <ul>
          {status.map((proj, idx) => (
            <li key={idx}>{proj.status} - {proj.projectId}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectStatus;
