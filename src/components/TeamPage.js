import React from 'react';
import { useParams } from 'react-router';
const TeamPage = () => {
  const { teamName } = useParams();

  return <div>Team page of {teamName}</div>;
};
export default TeamPage;
