import useFetch from './useFetch';

const usePlayers = (team) => {
  return useFetch('/players', 'POST', JSON.stringify({ team }));
};
export default usePlayers;
