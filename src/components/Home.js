import React from 'react';
import useTeamNames from '../hooks/useTeamNames';
import TeamLogo from './TeamLogo';
import { Link } from 'react-router-dom';
const Home = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) {
    return null;
  }

  return (
    <div className='container'>
      <h1 className='large-header'>Hash History Basketball League</h1>
      <p className='text-center header'>Select a Team</p>
      <div className='home-grid'>
        {teamNames.map((team) => (
          <Link key={team} to={`/${team}`}>
            <TeamLogo id={team} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
