import React from 'react';

const ProjectCard = () => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
      </div>
      <div className="card-body">
        <ProjectItem title="Server Migration" percentage="20%" color="bg-danger" />
        <ProjectItem title="Sales Tracking" percentage="40%" color="bg-warning" />
        <ProjectItem title="Customer Database" percentage="60%" color="" />
        <ProjectItem title="Payout Details" percentage="80%" color="bg-info" />
        <ProjectItem title="Account Setup" percentage="Complete!" color="bg-success" />
      </div>
    </div>
  );
};

const ProjectItem = ({ title, percentage, color }) => {
  return (
    <div>
      <h4 className="small font-weight-bold">
        {title} <span className="float-right">{percentage}</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar ${color}`}
          role="progressbar"
          style={{ width: percentage === 'Complete!' ? '100%' : percentage }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
